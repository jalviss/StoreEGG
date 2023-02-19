import React from 'react';
import { useHistory } from 'react-router-dom';

function MyProductButton() {
  const history = useHistory()

  const myProductPage = () => {
    history.push("/myproduct")
  }
  return (
    <div className='w-30'>
        <div className='container w-32 flex items-start font-bold bg-orange-400 hover:bg-orange-500 w-30 p-2 pl-5 ml-5 border-2 border-black rounded-lg' >
            <button onClick={myProductPage}>My Product</button>
        </div>
    </div>
  );
}

export default MyProductButton;
