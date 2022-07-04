import React from 'react';
import { useState,useEffect } from 'react';
import {userLikesPosts} from '../../utils/db'
import Link from 'next/link';
const UserLikes = ({user}) => {
    return (
        <div>
          
<div>


<div>


{user?.likes?.length > 0 ? (


<div>
    <div>
        {user?.likes?.map(like => {


return (

<div key={like.id} className=' my-8'>
<Link href={`/detail/${like.id}`}>
<video
                  loop
                //  ref={videoRef}
                  src={like.videos.video}
                  className='lg:w-[600px]  h-[300px] md:h-[400px] lg:h-[528px] w-2/3 rounded-2xl cursor-pointer bg-gray-100'
                ></video>
                </Link>


</div>



) })}

    </div>
</div>



)

: (


<div>
<h1>

No posts likes Yet

</h1>

</div>


)

}







</div>









</div>




        </div>
    );
}

export default UserLikes;
