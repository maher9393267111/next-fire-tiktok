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

<div className=' grid grid-cols-12'>

{/* ---sidebar-- */}
<div className=' cols-span-3'>
    <Sidebar />
</div>

<div className=' col-span-9'>
    {children}
</div>



</div>







</div>








</div>







        </div>
    );
}

export default Layout;
