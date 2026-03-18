import React, { useContext, useEffect } from 'react'
import { SiIfood } from "react-icons/si"
import { IoSearch } from "react-icons/io5"
import { LuShoppingBag  } from "react-icons/lu"
import notecontext from '../context/notecontext'
import junkFoodData from '../context/backend'
import { useSelector } from 'react-redux'

function Header() {
  let {input,setinput,all,setall,showcart,setshowcart}=useContext(notecontext)

  useEffect(()=>{
    let newlist = junkFoodData.filter((item)=>item.name.includes(input) 
    ||
    item.name.toLowerCase().includes(input))
    setall(newlist)
    },[input])

     let items = useSelector(state=>state.cart)


  return (
    <header className='w-full  bg-gray-300 h-20 flex justify-between items-center px-8 ' >

      <div className='w-12 h-12 bg-white flex justify-center items-center  rounded-md shadow-xl'>
        <SiIfood className='w-6 h-6 text-blue-600' /> </div>

      <form className='w-[50%] h-12 bg-white flex items-center px-5 gap-5 rounded-md shadow-xl min-w-[70%]' onSubmit={(e)=>e.preventDefault}><IoSearch className='w-5 h-5'/>

        <input
        type="text"
        placeholder='Search...'
        onChange={(e)=>setinput(e.target.value)} 
        value={input} 
        className='outline-none  md-taxt-[20px] text-20' />
        
      </form>
        <div className='w-12 h-12 bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={()=>setshowcart(true)}>
        <span className='top-0 absolute right-0.5 font-bold text-5'>{items.length}</span>
        <LuShoppingBag  className='w-6 h-6 text-blue-600' /></div>
    </header>
  )
}

export default Header
