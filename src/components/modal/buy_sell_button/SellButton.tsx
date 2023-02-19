import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../../../features/ProductSlice';
import { IProduct } from '../../view_style/interface/IProduct';
import { useAppSelector } from '../../../redux/redux';
import { add, selectCoin } from '../../../features/CoinSlice';

function SellButton({product} : {product:IProduct}) {
  
  const dispatch = useDispatch();
  return (
    <div className='w-30'>
        <div className='container w-32 flex items-start font-bold bg-orange-400 hover:bg-orange-500 w-30 p-2 pl-5 ml-5 border-2 border-black rounded-lg justify-center'>
        <button onClick = {(e) => {
                                        e.stopPropagation();
                                        dispatch(remove(product));
                                        dispatch(add(product.price))
                                      }}>
        SELL
        </button>
        </div>
    </div>
  )
}

export default SellButton