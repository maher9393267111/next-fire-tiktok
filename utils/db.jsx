
import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    onSnapshot,
    orderBy,
    limit,
    query,
    where,
    FieldPath,
    updateDoc,
    arrayUnion,
    addDoc,
    deleteDoc,
    serverTimestamp
} from "firebase/firestore";

import {
    getDownloadURL,
    ref,
    uploadString,
    getStorage,
    uploadBytes,
    deleteObject,
  } from "firebase/storage";


import { db,storage } from '../firebase'
import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";
import { toast } from "react-toastify";





export const createPost = async (postdata) => {

    console.log('subdata--->⚡⚡');
    await addDoc(collection(db, "posts",), postdata).then(() => {
        toast.success("post created successfully");

    }
    ).catch((error) => {
        toast.error(error.message);


    }
    );
}
