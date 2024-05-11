import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nvidia from './components/Nvidia';
import Trending from './components/Trending';
import Understd from './components/Understd';
import Stocks from './components/Stocks';
import logo from '../src/assets/images/webp/nvidiaImg.webp'
import { useState, useEffect } from 'react';
import Backtotop from './components/Backtotop';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  }, [])


  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    })
  }, [])

  return (
    <>
      {loader ? (<div className=' bg-white position-fixed d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 bottom-0 end-0 start-0 z-3'>
        <img src={logo} alt="" width={150} className='anime-bounce' />
        <div className="loader mt-5"></div>
      </div >) :
        (<div className=" position-relative">
          <Backtotop />
          <Nvidia />
          <Trending />
          <Understd />
          <Stocks />
        </div>
        )}
    </>
  )
}

export default App
