import '../styles/globals.css'
import { wrapper } from "../store/index";
import Context from '../context/index'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import Layout  from '../components/main/layout'
//import CartContext from '../context/cartContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
//import 'antd/dist/antd.css';
import {useState, useEffect} from 'react';
function MyApp({ Component, pageProps }) {
 
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);  

  if (isSSR) return null;


  return  (

    <React.Fragment>

<ChakraProvider>


<Context>
  {/* <CartContext> */}
  <Layout> 
  <ToastContainer/>

<Component {...pageProps} />

  </Layout>
{/* </CartContext> */}
</Context>

</ChakraProvider>
</React.Fragment>

  )

}

export default wrapper.withRedux( MyApp);
