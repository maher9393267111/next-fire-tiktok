import React from 'react';
import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";

import { useAuth } from "../../context/index";
import { useState, useRef } from "react";
import { db, storage } from "../../firebase";
import { addDoc, collection, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from "firebase/storage";


const CommntInput = ({post}) => {

const {userinfo} = useAuth();

const [input, setInput] = useState("");
const [selectedFile, setSelectedFile] = useState(null);
const [loading, setLoading] = useState(false);
const filePickerRef = useRef(null);



const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts",post.id,'comments'), {
      userid:userinfo.id ,
      text: input,
      userImg: userinfo.image,
      timestamp: serverTimestamp(),
      name: userinfo.name,
      postedbyId: userinfo.id,
   //   groupid: groupid,
      postid:post.id
    
    });

  //  const imageRef = ref(storage, `posts/${docRef.id}/image`);

    // if (selectedFile) {
    //     console.log(' 🔵 🔵 🔵 🔵',docRef.id)
    //   // Upload image as url to storage then send it to current user's post doc as update
    //   await uploadString(imageRef, selectedFile, "data_url").then(async () => {
    //     const downloadURL = await getDownloadURL(imageRef);
    //     await updateDoc(doc(db, "posts",postid,'comments', docRef.id), {
    //       image: downloadURL,
    //     });
    //   });
    // }

  //  setRefresh(!refresh)

    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };








    return (
        <div className=' sm:-ml-12 md:ml-0'>
        
        <div>

<>
<div>
            <div>
                <>
                    {userinfo?.name && (
                        <div className="flex border-b w-[80%] mx-auto text-center border-gray-200 p-3 space-x-3">
                            {/* <img onClick={signOut} className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" src={session.user.image} alt="user-img" referrerPolicy="no-referrer"/> */}
                            <div className="w-full divide-y divide-gray-200">
                                <div className="">
                                    <textarea
                                        className="w-full border-2 focus:ring-0 text-lg placeholderbg-gray-700 tracking-wide min-h-[50px] text-gray-700"
                                        rows="2"
                                        placeholder="What`s happening"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    ></textarea>
                                </div>
                           
                                <div className="flex items-center justify-between pt-2.5">
                                    {!loading && (
                                        <>
                                            <div className="flex">
                                             
                                                <EmojiHappyIcon className="hoverEffect p-2 text-sky-400 hover:bg-sky-100 h-10 w-10" />
                                            </div>
                                            <button
                                                onClick={sendPost}
                                                disabled={!input.trim() }
                                                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                                type="submit"
                                            >
                                                Create Comment
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </div>
        </div>

</>





        </div>
            
        </div>
    );
}

export default CommntInput;
