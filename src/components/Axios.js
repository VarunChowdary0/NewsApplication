import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Globals } from '../globals/Globals';

const Axios = () => {

    const {apiKey}=useContext(Globals);
    let url= ('https://newsapi.org/v2/everything?q=keyword&apiKey=');
    const [loading,setLoader]=useState(true)
    const {country} = useContext(Globals)
    const {interNetError,setError} = useContext(Globals)
    const {keyword} = useContext(Globals)
    let [Data,setData]=useState([]);
    const {ErrorMsg , setErrorMsg} = useContext(Globals)
    const {Mode,SetMode} = useContext(Globals)
    if(Mode==="Explore")
    {
        url=("https://newsapi.org/v2/everything?q=keyword&apiKey=");
    }
    else if(Mode==="Headlines")
    {
        url=(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=`);
    }
    else if(Mode==="Tech")
    {
        url=("https://newsapi.org/v2/everything?q=techonology&apiKey=");
    }
    else
    {
        url=(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=`);
    }

    const StartLoad=()=>{
        setLoader(true)
    }
    const StopLoad=()=>{
        setLoader(false)
    }
    const ShowError=()=>{
        setError(true)
    }
    const CloseError=()=>{
        setError(false)
    }
    useEffect(()=>{
        StartLoad();
        axios.get(url+apiKey)
        .then((res)=>{
            setData(res.data['articles']);
            StopLoad();
            if(interNetError===true){
                CloseError();
            }
        })
        .catch((err)=>{
            console.log("error: ",err);
            ShowError()
                if(err.response!==undefined){
                    console.log(err.response.data.code)
                    SetEror(err.response.data.message,err.response.data.code)
                }
                else{
                    SetEror("Please check your Internet connection ",err.message)
                }

        })
        
    },[Mode,keyword,country])
    const search_=()=>{
        SetMode('Searching')
    }
    useEffect(()=>{
        search_()
    },[keyword])
    const SetEror=(m,c)=>{
        setErrorMsg({
            'message':m,
            'code':c
        })
    }
    if(ErrorMsg){
        if(ErrorMsg.code===''){
            console.log('qwd')
        }
    }
    const filteredData = Data.filter((ele) => ele.title !== '[Removed]');
  return (
    <>
        {loading ?<div className='flex  min-h-screen w-full justify-center
                                     dark:bg-[#000]
                                    dark:text-[#fff] '>
                            <div>loading.....</div>
        </div> :
        <div className='flex  min-h-screen w-full dark:bg-[#000] pb-11'>
        <div className='pl-8 pt-2 pr-12 flex-col w-full space-x-4 space-y-4 
                        sm-max:pl-2' >
            <button className='p-3 rounded-md
                                        bg-green-button 
                                        text-[#fff] text-lg
                                        dark:bg-[#1c7027] hover:opacity-80
                                        active:scale-105
                                        transition-all
                                        '
                >{Mode}</button>
                      <div  className='flex flex-col justify-center items-center w-full h-fit space-y-5 '>
                            {filteredData.map((ele, index) => (
                            <a href={ele['url']}
                                className='flex flex-row w-full h-fit hover:scale-[1.02] transition-all
                                    dark:bg-[#121212] rounded-md dark:text-[#fff]
                                    bg-[#f7f7f7] shadow-xl
                                    px-5 py-4 
                                    max-sm:flex-col
                                    max-sm:space-y-6
                                    max-md:flex-col
                                    max-md:space-y-6                                   
                                    '
                key={index}>
                                
                                    <div className='w-[500px] max-sm:w-full flex justify-center items-center '>
                                        <img className='w-[300px] max-md:w-[80%] max-sm:w-[90%] rounded-md' src={ele['urlToImage']} alt={ele['title']} />
                                    </div>
                                    <div className='flex flex-col pl-4'>
                                    <div className='font-semibold'>{ele['title']}</div>
                                    <div className='font-light'>{ele['description']}</div>
                                    <div className='font-thin text-[#4f4f4f] dark:text-[#9c9c9c] mt-2 text-[15px]'>{ele['content']}</div>
                                    </div>
                            </a>
                            ))}
                      </div>
            
        </div>
    </div>}
        
    </>
  )
}

export default Axios
