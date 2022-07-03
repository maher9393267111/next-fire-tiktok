
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { useAuth } from '../../context';
const Navbar = () => {

const {userinfo} = useAuth();
const [searchValue, setSearchValue] = useState('');
const router = useRouter();

const handleSearch = (e) => {
    e.preventDefault();
    
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };


    return (
        <div className=''>
            
<div>

{/* ---flex parent---- */}

<div>
<div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
          <image
          
            className='cursor-pointer'
            src='https://project-tiktik.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftiktik-logo.25e3b9c4.png&w=1920&q=75'
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>

      <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
            placeholder='Search accounts and videos'
          />
          <button
            // onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {userinfo ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link>
            {userinfo?.image && (
              <Link href={`/profile/${userinfo._id}`}>
                <div>
                  <image
                    className='rounded-full cursor-pointer'
                    src={userinfo?.image}
                    alt='user'
                   
                  />
                </div>
              </Link>
            )}
              <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                //   googleLogout();
                //   removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
          </div>
        ) : (
            <div>
                sign with google
            </div>
            // <GoogleLogin
            //   onSuccess={(response) => createOrGetUser(response, addUser)}
            //   onError={() => console.log('Login Failed')}
            // />
        )}
      </div>
    </div>


</div>





</div>



        </div>
    );
}

export default Navbar;