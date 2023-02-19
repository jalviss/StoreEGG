import React, { useState } from 'react'
import { IProduct } from '../../view_style/interface/IProduct'
// import { add } from '../../../redux/MyProductRedux';
import { useDispatch } from 'react-redux';
import { add } from '../../../features/ProductSlice';
import { useAppSelector } from '../../../redux/redux';
import { min, selectCoin } from '../../../features/CoinSlice';
import NotEnoughCoin from '../sub_modal/NotEnoughCoin';

function BuyButton({product} : {product:IProduct}) {
    const coins = useAppSelector(selectCoin);
    const dispatch = useDispatch();
    const [notEnoughMoney, setNotEnoughMoney] = useState(false);
    console.log(notEnoughMoney)
  return (
    <div className='w-30'>
        <div className='container w-32 flex items-start font-bold bg-orange-400 hover:bg-orange-500 w-30 p-2 pl-5 ml-5 border-2 border-black rounded-lg justify-center'>
            <button onClick = {(e) => {
                                        e.stopPropagation();
                                        if (coins >= product.price){
                                          dispatch(add(product))
                                          dispatch(min(product.price))
                                          console.log(coins)
                                        }
                                        else{
                                          setNotEnoughMoney(true)
                                          console.log(notEnoughMoney)
                                          console.log(coins)
                                          console.log(product.price)
                                        }
                                      }}>
              BUY</button>
        </div>
        {notEnoughMoney && (
          <NotEnoughCoin onClick={() => setNotEnoughMoney(false)}/>
        )
        }
       
    </div>
  )
}

export default BuyButton