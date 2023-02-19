import React from 'react';
import storeEggLogo from '../../assets/egg-full.png';
import coinLogo from '../../assets/silver-coin.png';
import userPic from '../../assets/user-pic.png';
import SearchIcon from '../../assets/SearchIcon';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux';
import { selectCoin } from '../../features/CoinSlice';
import { IProduct } from '../view_style/interface/IProduct';

function Navbar({value, setValue}: {value:string, setValue : React.Dispatch<React.SetStateAction<string>>}) {
  const history = useHistory()

  const homePage = () => {
    history.push("/")
  }

  const coins = useAppSelector(selectCoin);
  return (
    <nav className="h-30 bg-teal-700 flex justify-center shadow-lg">
      <div className="bg-teal-700 flex justify-between pl-5 pr-5 w-9/12">
        <div className="h-90 flex items-center justify-around cursor-pointer" onClick={homePage}>
          <img className="h-16 mr-3" src={storeEggLogo}  alt="" />
          <div className="font-sans text-lg text-white font-semibold">Store Egg</div>
        </div>

        <div className="flex items-center ">
          <form method="GET">
            <div className="flex w-96 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <SearchIcon />
              </span>
              <input
                onChange={e => setValue(e.target.value.toLowerCase())}
                type="search"
                className="block w-full px-12 py-2 text-gray-700  bg-white border rounded-full  focus:border-slate-600 focus:ring-slate-600 focus:outline-none focus:ring focus:ring-opacity-40" 
                placeholder="Search Product..."
              />
            </div>
          </form>
        </div>
        
        <div className="flex justify-around items-center">
          <div className="flex justify-around items-center w-100 text-sm p-1 pr-3 bg-slate-900 rounded-full text-white">
            <img className="h-8 mr-1" src={coinLogo}  alt="" />
            {coins} coins
          </div>
          <img className="h-12 ml-5" src={userPic}  alt="" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
