import React from 'react';
import Likes from '../../components/video/likes';
import { useRouter } from 'next/router';
import  Link from 'next/link';
import { useState,useEffect } from 'react';
import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";
  import { query, orderBy, collection, doc,getDoc,getDocs} from "firebase/firestore";
import safeJsonStringify from "safe-json-stringify";

import { db } from "../../firebase";
import VideoCard from '../../components/video/videoCard';
import CommntInput from '../../components/video/commntInput';
import CommnetList from '../../components/video/commnetList';
const Postid = ({post}) => {
    return (
        <div>

<div className=' pb-24'>


{/* ----grid video and commnets sidebar--- */}


<div className=' mt-12'>

{/* ----make like---- */}

<div className=' relative s  lg:top-[118px] sm:top-[-22px]'>

<Likes post ={post} />



</div>


{/* ---video side--- */}



<div className=' '>

<VideoCard post={post} />
</div>



{/* ----commnets side--- */}

<div>
    <div>
        

<CommntInput post={post} />

    </div>

<div>
<CommnetList post={post} />
</div>


</div>






</div>








</div>







            
        </div>
    );
}

export default Postid;




export async function getServerSideProps(context) {
    const id = context.params.postid;
    console.log("id--->",id);
    const snapshot = await getDoc(doc(db, "posts", id));
    const snapshotLikes = await getDocs(collection(db, "posts", id, "likes"));


    const postdata = snapshot.data();
 
  



    if (!postdata) {
      return {
        notFound: true,
      };
    }
  
     postdata.id = snapshot.id;
  //  likesdata.id = snapshotLikes.id;

  
  //  strignfy the data
    const post = JSON.parse(
      safeJsonStringify({ id: snapshot.id, ...snapshot.data() }) // needed for dates
    );

    // const postlikes = JSON.parse(
    //   safeJsonStringify({ ...}) // needed for dates
    // );
  

 
    return {
      props: { post},
    };
  }