
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





export const AllPosts= () => {
    return getDocs(query(collection(db, "posts"),    
   // orderBy('orderby', "desc")
    )).then((querySnapshot) => {
  
      var data = [];
      querySnapshot.forEach((doc) => {
     
          console.log("posts is exist");
          
          data.push({ ...doc.data(),id: doc.id  })
        
      });
    //  setProductsNew(data);
  console.log("Posts------>",data);
      return  data;
    });
  }



  

export const PostsByTopic= (topic) => {
    return getDocs(query(collection(db, "posts"), 
    where("topic", "==", topic)   
   // orderBy('orderby', "desc")
    )).then((querySnapshot) => {
  
      var data = [];
      querySnapshot.forEach((doc) => {
     
          console.log("posts is exist");
          
          data.push({ ...doc.data(),id: doc.id  })
        
      });
    //  setProductsNew(data);
  console.log("Posts by specefic Topic------>",data);
      return  data;
    });
  }



  
export const userPosts= (userName) => {
  return getDocs(query(collection(db, "posts"), 
  where("postedby", "==", userName)   
 // orderBy('orderby', "desc")
  )).then((querySnapshot) => {

    var data = [];
    querySnapshot.forEach((doc) => {
   
        console.log("user posts is exist");
        
        data.push({ ...doc.data(),id: doc.id  })
      
    });
  //  setProductsNew(data);
console.log("specefic user Posts----->",data);
    return  data;
  });
}


// userLikesPosts


export const userLikesPosts= (userName) => {
  return getDocs(query(collection(db, "posts"), 
  where("postedby", "==", userName)   
 // orderBy('orderby', "desc")
  )).then((querySnapshot) => {

    var data = [];
    querySnapshot.forEach((doc) => {
   
        console.log("user posts is exist");
        
        data.push({ ...doc.data(),id: doc.id  })
      
    });
  //  setProductsNew(data);
console.log("specefic user Posts----->",data);
    return  data;
  });
}
