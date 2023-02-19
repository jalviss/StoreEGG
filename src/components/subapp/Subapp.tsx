import React, { useState } from 'react'
import goldCoin from '../../assets/gold-coin.png'
import silverCoin from '../../assets/silver-coin.png'
import bronzeCoin from '../../assets/bronze-coin.png'
import fullEgg from '../../assets/egg-full.png'
import brokenEgg from '../../assets/egg-broken.png'
import { useDispatch } from 'react-redux'
import { add } from '../../features/CoinSlice'
import SubappNavbar from '../navbar/SubappNavbar'

function Subapp() {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('Click on the Egg to Collect Coins')
  const [congratolatory, setCongratolatory]= useState<null|any>('')
  // const [egg, setEgg] = useState(fullEgg)
  const [broke, setBroke] = useState(false)
  const [getCoin, setGetCoin] = useState<null|any>()
  const [addCoin, setAddCoin] = useState<number>(0)
  const breakEgg = () => {
    if(!broke){
      setBroke(true)
      let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1
      // setGetCoin(goldCoin)
      if(random === 1){
        dispatch(add(25))
        setGetCoin(bronzeCoin)
        setMessage('You Got a BRONZE COIN!!!')
      }
      else if(random === 2){
        dispatch(add(50))
        setGetCoin(silverCoin)
        setMessage('You Got a SILVER COIN!!!')
      }
      else if(random === 3){
        dispatch(add(100))
        setGetCoin(goldCoin)
        setMessage('You Got a GOLD COIN!!!')
      }
      
      setCongratolatory('CONGRATULATIONS!!!')
    }
  }
  
  const reset = () => {
    setBroke(false) 
    setCongratolatory(null)
    setMessage('Click on the Egg to Collect Coins')
  }
  
  return (
    <div>
      <SubappNavbar/>
      <div className='m-5'>
        <div className='font-semibold text-slate-500 text-xl ml-5'>
          Collect Coins
        </div>

        <div className='flex-row justify-center items-center'>
          <div className='flex justify-center text-center gap-10 font-bold text-2xl'>
            <div className='flex-row items-center justify-center'>
              <img className='w-20' src={goldCoin} alt=''/>
              <p className=''>100 Coin</p>
            </div>
            <div className='flex-row items-center justify-center'>
              <img className='w-20' src={silverCoin} alt=''/>
              <p className=''>50 Coin</p>
            </div>
            <div className='flex-row items-center justify-center'>
              <img className='w-20' src={bronzeCoin} alt=''/>
              <p className=''>25 Coin</p>
            </div>
          </div>

          <div className='font-semibold text-green-600 text-xl flex justify-center items-center my-7'>
            {congratolatory}
          </div>
          <div className='font-semibold text-slate-500 text-xl flex justify-center items-center my-7'>
            {message}
          </div>

          <div className='flex items-center justify-center relative'>
            {
              (broke)?(
                <>
                  <img className='h-64 cursor-pointer' src={brokenEgg} alt='' onClick={reset}/>
                  <img className='h-24 cursor-pointer absolute top-28 z-10' src={getCoin} alt='' />
                </>
              ):(
                <img className='h-64 cursor-pointer' src={fullEgg} alt='' onClick={breakEgg}/>
              )
            }
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subapp