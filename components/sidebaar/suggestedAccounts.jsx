import React from 'react';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { AllUsers } from '../../utils/db';
import { useState,useEffect } from 'react';
const SuggestedAccounts = () => {

const [users,setAllusers] = useState([]);

useEffect(() => {

    AllUsers().then(res => {
        setAllusers(res);
        console.log("USERS---- RESPONSE-->",res);
    }).catch(err => {
        console.log(err);
    })


},[]);


    return (
        <div>

<>
<div className='xl:border-b-2 border-gray-200 pb-4'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Suggested accounts
      </p>
      <div>
        {users?.slice(0, 6).map((user) => (
          <Link href={`/profile/${user.id}`} key={user.id}>
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded'>
              <div className='w-8 h-8'>
                <img
                  
                  className='w-[40px] h-[40px]  rounded-full'
                  src={user.image ? user.image : 'https://i.pravatar.cc/300'}
                  alt='user-profile'
                  layout='responsive'
                />
              </div>

              <div className='hidden xl:block'>
                <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                  {user.name.replace(/\s+/g, '')}{' '}
                  <GoVerified className='text-blue-400' />
                </p>
                <p className='capitalize text-gray-400 text-xs'>
                  {user.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>



</>


        </div>
    );
}

export default SuggestedAccounts;
