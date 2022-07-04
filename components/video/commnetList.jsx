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
import Link from 'next/link';


const CommnetList = ({post}) => {





    const q = query(
        collection(db, "posts", post.id, "comments"),
        //orderBy("timestamp")
      );
      const [comments] = useCollectionData(q);
console.log('------>',comments);

    return (
        <div>

        <div>
<div>




{ comments &&  comments?.map((comment) => (


<div key={comment.name} className=' my-4 border-b-2 py-2 w-2/3'>

{/* ---user image and name--- */}

<div className=' flex gap-6'>

{/* ---user image--- */}

<div>
<Link href={`/profile/${comment.userid}`}><img  className=' rounded-full w-14 h-14 ' src={comment?.userImg} alt="" />
</Link>
</div>

{/* --user name-- */}

<div className='mt-2 font-bold'>
  <p>{comment.name}</p>

<div>
  <p className='font-semibold'>{comment.text}</p>
</div>


</div>


</div>


{/* ----commnet text--- */}

</div>

))}




</div>








        </div>



            
        </div>
    );
}

export default CommnetList;
