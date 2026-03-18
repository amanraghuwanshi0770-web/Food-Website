import React, { useContext } from 'react'
import AllCard from '../AllCard'
import CardProduct from '../components/CardProduct'
import CardProduct2 from '../components/CardProduct2'
import junkFoodData from '../context/backend'
import notecontext from '../context/notecontext'
import { GiCrossMark } from "react-icons/gi";
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {

  const { all, setall, showcart, setshowcart } = useContext(notecontext)

  
  const filter = (category) => {
    if (category === "All") {
      setall(junkFoodData)
    } else {
      const newlist = junkFoodData.filter(item => item.category === category)
      setall(newlist)
    }
  }


  const items = useSelector(state => state.cart)

  const subtotal = items.reduce((total, item) => total + item.qty*item.price, 0)
  const deliveryfee = 20
  const tax = subtotal * 0.5 / 100
  const total = subtotal + deliveryfee + tax

  return (
    <div className='bg-gray-100 w-full min-h-screen'>

    
      <div className='flex flex-wrap justify-center items-center gap-6 py-6'>
        {AllCard.map((item) => (
          <div
            key={item.id}
            onClick={() => filter(item.name)}
            className="w-32 h-32 bg-white flex flex-col items-center justify-center gap-3 p-3 text-sm font-semibold text-gray-700 rounded-2xl shadow-md hover:bg-blue-100 hover:scale-105 cursor-pointer transition-all duration-300">
            <span className="text-2xl">{item.icons}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    
      <div className='w-full flex flex-wrap gap-6 justify-center items-center py-8'>
        {all.map((item) => (
          <CardProduct
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            id={item.id}
            food_type={item.food_type}
            category={item.category}
          />
        ))}
      </div>

  
      {showcart && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setshowcart(false)}
        ></div>
      )}
      <div className={`w-full md:w-[380px] h-full p-5 fixed top-0 right-0 bg-white shadow-2xl transition-all duration-500 z-50
        ${showcart ? 'translate-x-0' : 'translate-x-full'}`}>

        <header className='w-full flex justify-between items-center border-b pb-3'>
          <span className='text-blue-500 text-lg font-semibold'>Your Order</span>
          <GiCrossMark
            className='text-blue-500 w-6 h-6 cursor-pointer hover:text-gray-500'
            onClick={() => setshowcart(false)}/>
        </header>

  
        <div className='w-full mt-6 flex flex-col gap-4 max-h-[50vh] overflow-y-auto'>
          {items.length > 0 
          ? (
            items.map((item) => (
              <CardProduct2
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
                qty={item.qty}/>))
            ) : (
            <p className='text-center text-blue-500'>Cart is Empty </p>
          )}
        </div>

        <div className='w-full border-t border-gray-300 mt-4 pt-4 flex flex-col gap-3'>

          <div className='flex justify-between'>
            <span className='text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-blue-500 font-semibold'>₹{subtotal}</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-blue-500 font-semibold'>₹{deliveryfee}</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-gray-600 font-semibold'>Tax</span>
            <span className='text-blue-500 font-semibold'>₹{tax.toFixed(2)}</span>
          </div>

        
          <div className='flex justify-between mt-3 border-t pt-3'>
            <span className='text-lg font-bold text-gray-800'>Total</span>
            <span className='text-lg font-bold text-blue-600'>₹{total.toFixed(2)}</span>
          </div>

          <button className='mt-4 w-120 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300  ' onClick={()=>toast.success('Order Placed..')}>
            Order Now
          </button>

        </div>
      </div>
    </div>
  )
}

export default Home