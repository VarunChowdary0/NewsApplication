import React, { useContext, useEffect, useState } from 'react'
import { Globals } from '../globals/Globals'

const PopUpNoInternet = () => {
    const {apiKey1,apiKey2} = useContext(Globals)
    const {apiKey,setswapKey}=useContext(Globals);
    const {interNetError} = useContext(Globals)
    const [popUP,setPopup] = useState(true)
    const [showSwap,setShowSwap] = useState(false)
    const {SetMode} = useContext(Globals)
    const ClosePopUp=()=>{
        setPopup(false)
        SetMode("Explore")
    }
    const {ErrorMsg , setErrorMsg}=useContext(Globals)
    const SwpAPI=(Key)=>{
        setswapKey(Key)
    }
    const setShow=()=>{
        setShowSwap(true)
    }
    useEffect(()=>{
        if(ErrorMsg){
            if(ErrorMsg.code=='rateLimited'){
                setShow();
            }
        }
    },[interNetError])

    const Doit = ()=>{
        if(apiKey===apiKey1){
            SwpAPI(apiKey2)
        }
        else{
            SwpAPI(apiKey1)
        }
        ClosePopUp();
    }
    
    //fixed top-0 bottom-0 left-0 right-0
  return (
  <>
 {interNetError?

    <div>
        {popUP ? 
        <div className=' bg-[#5a5a5a40] min-h-screen w-full text-[#fff]
        dark:bg-[#00000040] fixed flex justify-center pt-[100px]
        dark:text-[#000]
        '>
            <div className=' h-[400px] w-[500px] dark:bg-[#fff40] rounded-lg 
                            max-sm:h-[260px] max-sm:w-[250px] bg-[#2b2b2b]
                            dark:bg-[#fff]
                                p-6  
                            '>
                <div className='flex justify-end pr-5'>
                    <div className='p-2 rounded-[50%] hover:bg-[#00000040] transition-all dark:text-[#fff]' onClick={ClosePopUp}>
                        <svg className='dark:fill-[#222222] fill-[#ffffff]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </div>
                </div>
                    <h1 className='mt-3 mb-5 text-xl font-bold '>{(ErrorMsg.code.toUpperCase())}</h1>
                    <p className='font-extralight'>
                        {ErrorMsg.message}
                    </p>
                    {showSwap?<button className='mt-[100px] p-2 rounded-sm bg-[#0b0b0b62] hover:bg-green-button text-[#fff] ' onClick={Doit}>swap api</button>:
                    <></> }
                </div>
                
            </div>
        :
            <div></div>
        }
        
    </div>
 :<div></div>}
        
        
  </>
  )
}

export default PopUpNoInternet