import React from 'react'

function NotEnoughCoin({onClick}: {onClick: () => void}) {
  return (
    <div className='fixed h-screen w-screen bg-black bg-opacity-20 top-0 left-0 flex justify-center items-center'onClick={onClick} >
        <div className='container w-1/5 h-1/5 bg-slate-50 p-7 shadow-lg flex-row justify-center font-semibold' >
            <p>Sorry, </p> 
           <p>you don't have enough coins!</p> 
           <p>Play minigame to earn coins</p> 
        </div>
    </div>
  )
}

export default NotEnoughCoin