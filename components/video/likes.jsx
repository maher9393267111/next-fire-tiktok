import React from 'react';
import {useAuth} from '../../context/index';
import {AiOutlineHeart} from 'react-icons/ai';
import {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {BsHeartFill} from 'react-icons/bs';
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    setDoc,
    getDoc,
    updateDoc,
    query,
    orderBy,
    where,
    getDocs,
    arrayRemove,
    arrayUnion
  } from "firebase/firestore";
  import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";


  import { db, storage } from "../../firebase";
const Likes = ({post} ) => {

const {userinfo} = useAuth();
    const [hasLiked, setHasLiked] = useState(false);

    const [likes, setLikes] = useState(0);
    const [refresh, setRefresh] = useState(false);

    const q = query(
        collection(db, "posts", post.id, "likes"),
      //  orderBy("timestamp")
      );
      const [likesdata, loading] = useCollectionData(q);



console.log('🥁🥁🥁🥁🥁',likesdata);

// exist like or not to current user

useEffect(() => {
    if (likesdata) {
        console.log('🌟🌟🌟🌟', likesdata);
      // ---->>> importnat to work good
      setHasLiked(
        likesdata.findIndex((like) => like.id === userinfo.id) !== -1
      );
      console.log("has liked---->", hasLiked);
   //   toast.success(`USE-EFFEct ${hasLiked}`);
    }
  }, [likesdata,refresh]);






  


// liked post


const likedPost = async () => {
    try {
      if (userinfo.name) {
        if (hasLiked) {
          setRefresh(!refresh);
        //  console.log(post.id, "___post id____");
          // delete doc from likes if aleready liked
          await deleteDoc(doc(db, "posts", post.id, "likes", userinfo.id));

// remove like from user   likes
            await updateDoc(doc(db, "users", userinfo.id), {
                likes: arrayRemove(post),
                });


      //    toast.error("Post unliked");
        } else {
          setRefresh(!refresh);
       //   console.log(post.id, "___post id____");
          // add doc to likes if not already liked
          await setDoc(doc(db, "posts", post.id, "likes", userinfo.id), {
            username: userinfo.name,
            id : userinfo.id,
          });
          // update user likes array

            await updateDoc(doc(db, "users", userinfo.id), {
                likes: arrayUnion(post),
              }
            );
       //   toast.success("Post liked");
        

        //  toast.success("Post liked");
        }
      } else {
    //    toast.error("Please login to like a post");
        // router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };





    return (
        <div className=''>


{ userinfo?.name ? ( 
            <div className=' conteiner lg:top-[17px] relative'>

          <div className='icon-container lg:relative lg:top-[30px] '>

          

            { hasLiked ? ( <BsHeartFill className='  text-[33px]' onClick={likedPost} /> ) : ( <AiOutlineHeart className='text-[32px]' onClick={likedPost} /> ) }
            </div>
        <div className=' ml-12 '>

     <p className=''>
     {likesdata?.length}
        </p>       
           
        </div>
        </div>
        ) : (

<h1>You Have to LOgged to Make Like</h1>


        )}

        </div>
    );
}

export default Likes;
