import React from 'react';
import Discover from '../sidebaar/discover';
import Footer from '../sidebaar/footer';
import  { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
const Sidebar = () => {
    const { pathname } = useRouter();
    const [showSidebar, setShowSidebar] = useState(true);


    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';
  

    return (
        <div>
          

<div>
    <>
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          
          <Discover />
          {/* <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          /> */}
          <Footer />
        </div>
      )}
    </div>
    
    
    </>



</div>

        </div>
    );
}



export default Sidebar;
