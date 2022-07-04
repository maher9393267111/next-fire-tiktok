import React from 'react';
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { query, orderBy, collection, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";



const CommnetList = ({post}) => {


    const q = query(
        collection(db, "posts", post.id, "comments"),
        orderBy("timestamp")
      );
      const [comments] = useCollectionData(q);


    return (
        <div>

            {comments?.length}
            
        </div>
    );
}

export default CommnetList;
