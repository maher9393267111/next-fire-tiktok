import '../styles/globals.css'
import { wrapper } from "../store/index";
import Context from '../context/index'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
//import Navbar  from '../components/dif/navbar'
//import CartContext from '../context/cartContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
//import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
 
  return  (

    <React.Fragment>

<ChakraProvider>


<Context>
  {/* <CartContext>
  <Navbar/> */}
  <ToastContainer/>

<Component {...pageProps} />
{/* </CartContext> */}
</Context>

</ChakraProvider>
</React.Fragment>

  )

}

export default wrapper.withRedux( MyApp);
