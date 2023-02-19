import React from 'react'
import { IProduct } from '../view_style/interface/IProduct'
import BuyButton from './buy_sell_button/BuyButton'
import SellButton from './buy_sell_button/SellButton'

function Modal({onClick, product, isHomepage}: {onClick: () => void, product:IProduct, isHomepage:boolean}) {
  return (
    <div className='fixed h-screen w-screen bg-black bg-opacity-10 top-0 left-0 flex justify-center items-center'onClick={onClick} >
        <div className='container w-3/4 h-3/4 bg-slate-50 p-10 shadow-lg' >
          <div className='flex-row justify-around'>
            <div className='font-bold text-2xl mb-5'>{product.title}</div>

            <div className='flex justify-center'> 
              <div className=' container flex-row justify-center mr-7'>
                <div className='mb-5'>
                  <img src={product.image} alt='' className='w-5/12'/>
                </div>
                {
                  (isHomepage ? (
                    <BuyButton product={product}/>
                  ) : (
                    <SellButton product={product}/>
                  ))
                }
              </div>

              <div className='py-10'>
                <div className='font-bold text-lg mb-3'> $ {product.price}</div>
                <div className='flex-row'>
                  Description : 
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal