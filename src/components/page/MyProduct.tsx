import React, { useState } from 'react';
import GridListView from '../view_style/GridListView';
// import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
// import { IProduct } from '../view_style/interface/IProduct';
import { useAppSelector } from '../../redux/redux';
import { selectMyProduct } from '../../features/ProductSlice';
import SubappButton from '../subapp/button/SubappButton';
// import { selectMyProduct } from '../../redux/MyProductRedux';
// import { useAppSelector } from '../../redux/redux';

function MyProduct() {
    // const [gridView, setGridView] = useState(true)
    // const myProducts = useSelector((state: IProduct[]) => state.);
    const myProducts = useAppSelector(selectMyProduct);
    const [liveSearch, setLiveSearch] = useState('')
  return (
    <>
    <Navbar value={liveSearch} setValue={setLiveSearch}/>

    <div className='h-full bg-teal-100 flex justify-center'>
        <div className='h-full ml-10 flex-row mr-10 w-9/12'>
            <div className='h-10'> </div>
            <GridListView isHomepage={false} listProduct={myProducts} liveSearch={liveSearch}/>

            <div className='h-10'></div>
            <SubappButton/>
        </div>
    </div>
    </>
  );
}

export default MyProduct;
