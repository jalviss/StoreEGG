import React from 'react';
import storeEggLogo from '../../assets/egg-full.png';
import coinLogo from '../../assets/silver-coin.png';
import userPic from '../../assets/user-pic.png';
import SearchIcon from '../../assets/SearchIcon';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux';
import { selectCoin } from '../../features/CoinSlice';

function SubappNavbar() {
  const history = useHistory()

  const homePage = () => {
    history.push("/")
  }

  const coins = useAppSelector(selectCoin);
  return (
    <nav className="h-30 bg-teal-700 flex justify-center items-center shadow-lg">
      <div className="bg-teal-700 flex justify-between pl-5 pr-5 w-9/12">
        <div className="h-90 flex items-center justify-around cursor-pointer" onClick={homePage}>
          <img className="h-16 mr-3" src={storeEggLogo}  alt="" />
          <div className="font-sans text-lg text-white font-semibold">Store Egg</div>
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

export default SubappNavbar;
