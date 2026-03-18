import React from 'react'
import { GiChickenOven } from 'react-icons/gi'
import {LuLeafyGreen} from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { Additem } from '../redux/cartSlice'
import { toast } from 'react-toastify'


function CardProduct({name,img ,price,id,food_type}) {
  let dispatch = useDispatch()

  return (
    <div className='w-72 h-100 bg-white p-4 rounded-xl flex flex-col gap-4 shadow-lg hover:shadow-2xl transition hover:border-2  border-blue-300'>

      <div className='w-full h-52 overflow-hidden rounded-lg'>
        <img
          src={img}
          alt=""
          className='w-full h-full object-cover rounded-lg'/>
      </div>

      <div className='text-2xl font-semibold'>
        {name}
      </div>

      <div className='flex justify-between items-center text-lg'>
        <div className='font-bold text-blue-600'>Rs {price}/-</div>

        <div className='bg-green-100 text-blue-600 px-2 py-1 rounded-md
        font-semibold text-sm'>
          {food_type === "veg"
          ?<LuLeafyGreen/>
          :<GiChickenOven/>
          }
          {food_type}</div>
      </div>
     <button 
  className='w-full p-3 bg-blue-200 rounded-lg font-semibold hover:bg-blue-400 transition'
  onClick={()=>{dispatch(Additem({id:id ,name:name,img:img ,price:price,food_type}))
  toast.success("item added")}
  }> Add To Dish</button>
    </div>
  )
}

export default CardProduct