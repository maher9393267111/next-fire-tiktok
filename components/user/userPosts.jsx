import React from 'react';
import { useState,useEffect } from 'react';
import {userPosts} from '../../utils/db'
import VideoCard from '../video/videoCard';
const UserPosts = ({user}) => {

const [posts,setPosts] = useState([]);

useEffect(() => {

    userPosts(user.name).then(posts => {
        setPosts(posts);
        console.log("USer RESPONSE----> posts--->",posts);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        console.log('finally');
    }
    );

},[user]);


    return (
       <div>
     
<div>


{posts.map(post => {

return (

    <div key={post.id}>
    <VideoCard post={post} />
    </div>
)})}

</div>


       </div>
    );
}

export default UserPosts;
