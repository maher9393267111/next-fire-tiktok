import React from 'react';
import { useRouter } from 'next/router';
import  Link from 'next/link';
import { useState,useEffect } from 'react';
import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";
  import { query, orderBy, collection, doc,getDoc} from "firebase/firestore";
import safeJsonStringify from "safe-json-stringify";

import { db } from "../../firebase";
import VideoCard from '../../components/video/videoCard';
const Postid = ({post}) => {
    return (
        <div>

<div>


{/* ----grid video and commnets sidebar--- */}


<div className=' grid-cols-12'>


{/* ---video side--- */}

<div className=' cols-span-6'>

<VideoCard post={post} />
</div>



{/* ----commnets side--- */}

<div>
    <div>
        <h1>Commnets Sidebar</h1>
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
    // const snapshotCategory = await getDoc(
    //   doc(db, "posts", snapshot.data().categoryid)
    // );
  
    const postdata = snapshot.data();
  



    if (!postdata) {
      return {
        notFound: true,
      };
    }
  
     postdata.id = snapshot.id;
  
  //  strignfy the data
    const post = JSON.parse(
      safeJsonStringify({ id: snapshot.id, ...snapshot.data() }) // needed for dates
    );
  
    // const category = JSON.parse(
    //   safeJsonStringify({ id: snapshotCategory.id, ...snapshotCategory.data() }) // needed for dates
    // );
    return {
      props: { post},
    };
  }