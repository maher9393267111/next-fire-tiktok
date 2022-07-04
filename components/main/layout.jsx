import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
const Layout = ({children}) => {
    return (
        <div>
<div>

<div>
    <Navbar />
</div>

{/* -----sidebaar and all content-- */}

<div>

<div className=' grid gap-6 grid-cols-12'>

{/* ---sidebar-- */}
<div className=' sm:col-span-2 md:col-span-4'>
    <Sidebar />
</div>

<div className='sm:col-span-10 md:col-span-8'>
    {children}
</div>


</div>







</div>








</div>







        </div>
    );
}

export default Layout;
