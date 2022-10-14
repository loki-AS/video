import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  const [isSSR, setisSSR] = useState(true)

  useEffect(() => {
    setisSSR(false)
  }, [])

  if(isSSR) return null
  
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
      <Navbar />
      
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
                <Component {...pageProps} />
        </div>
      </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp