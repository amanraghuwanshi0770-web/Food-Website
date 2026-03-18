import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { dikriment, incrymentqty, Removeitem } from '../redux/cartSlice'

function CardProduct2({id, price,name,img,qty}){

   let Dispatch = useDispatch()

  return (
    <div className='w-full h-30 p-2 shadow-lg flex justify-between'>

      <div className='w-[60%] h-full flex gap-4'>

        <div className='w-[40%] h-full overflow-hidden rounded-lg'>
          <img 
            src={img} 
            alt=""
            className='w-full h-full object-cover'/>
        </div>

        <div className="w-[60%] h-full flex flex-col gap-3">
          
          <div className="text-lg text-gray-600 font-semibold">
            {name} </div>

          <div className="w-25 h-11 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-blue-400 text-xl">

            <button className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300 text-blue-600" onClick={()=> {qty>1 ?Dispatch(dikriment(id)):
              1
             }}>
            - </button>

            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-black-400">{qty}</span>

            <button className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300 text-blue-600" onClick={()=>Dispatch(incrymentqty(id))}>
            +</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='font-semibold text-blue-600'>Rs {price}/-</span>
        <MdDeleteSweep size={30} className='text-blue-500 hover:text-blue-700 cursor-pointer gap-10' onClick={()=> Dispatch(Removeitem(id))}/>
      </div>
    </div>
  )
}

export default CardProduct2