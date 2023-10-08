import React, { useContext } from 'react'
import { useState , useEffect } from 'react';
import MENU from './MENU';
import { Globals } from '../globals/Globals';

const Header1 = () => {

  //-------------------------------------------------------
    const [Mode,changeMode]=useState(localStorage.getItem("mode")||"");
    const {keyword,setKey} = useContext(Globals)
    const {country,setCountry} = useContext(Globals)
    const [word,setWord]=useState("");
    useEffect(() => {
        if (Mode === "dark") {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [Mode]);

    const Togggle=()=>{
        if(Mode==="dark"){
            document.body.classList.remove("dark");
            localStorage.setItem("mode","");
            //To light
            changeMode("")
        }
        else if(Mode===""){
            document.body.classList.add("dark");
            localStorage.setItem("mode","dark");
            // to dark
            changeMode("dark");
        }
    }
    const lokfrEnter=(e)=>{
      if(e.key=='Enter'){
        SearchKey()
      }
    }
    const SetCountry = (e)=>{
        setCountry(e.target.value)
        localStorage.setItem('country',e.target.value)
    }
    const handleKeyL=(e)=>{
      setWord(e.target.value);
    }
    const SearchKey=()=>{
      setKey(word)
    }
  return (
    <>
    <header className='h-[60px] w-full  dark:bg-black flex items-center 
                        justify-between pr-10 dark:dark:bg-gray-bg max-sm:pr-2 
                        border-b-[1px] border-[#e3e3e3] dark:border-[#242424] 
    '>
      <div className='m ml-10 flex-4 space-x-2'>
        <input className='w-[15vw] h-7 rounded-sm focus:outline-none pl-2 text-sm' type='text' onChange={handleKeyL} onKeyDown={lokfrEnter} value={word} placeholder='search a keyword'/>
        <i class="fa-solid fa-magnifying-glass text-[#626262] hover:text-[#ffc465]" onClick={SearchKey}></i>
      </div>
      <MENU/>
              <select className='w-[40px] text-sm mr-7 focus:outline-none rounded-sm' value={country} onChange={SetCountry}>
                  <option value="in">IN</option>
                  <option value="us">US</option>
                  <option value="jp">JP</option>
                  <option value="au">AU</option>
                  <option value="sg">SG</option>
              </select>
            <div className={`rounded-md px-2 py-2 flex items-center text-[#de932a]
                            bg-green-500 hover:bg-green-400  hover:ring-1
                            transition-all  ring-green-700 active:bg-gray-700
                            text-white hover:cursor-pointer select-none
                            fa-solid fa-${Mode==="dark"?"moon":"sun"}
                            dark:text-[#fff]      
              `}   onClick={Togggle}>
            </div>
    </header>
    <div className='h-[30px] w-full bg-header-red-100 flex items-center justify-center
'>
    </div>
    </>
  )
}

export default Header1