import React, { useEffect, useState } from 'react';
import MyProductButton from '../my_product_button/MyProductButton';
import GridListView from '../view_style/GridListView';
import axios from 'axios';
import { IProduct } from '../view_style/interface/IProduct';
import SubappButton from '../subapp/button/SubappButton';
import Navbar from '../navbar/Navbar';

function Homepage () {
  const temporaryListProduct = [
    {
      id: 1,
      title: "",
      description:"",
      price: 0,
      image: "",
      count: 0,
    },
  ];
const [listProduct, setListProduct] = useState<IProduct[]>(temporaryListProduct);

useEffect(() => {
    axios.get<IProduct[]>("https://fakestoreapi.com/products")
    .then((result) => {
        console.log(result)
        setListProduct(result.data)
    })
}, [])
  
  const [liveSearch, setLiveSearch] = useState('')
  const [product, setProduct] = useState(listProduct)

  // const filterProduct = () => {
  //   if(liveSearch !== null){
  //     let filteredProduct = listProduct.filter(item => item.title.toLowerCase().includes(liveSearch))
  //     setProduct(listProduct)
  //   }
  //   else{
  //     setProduct(listProduct)
  //   }
  // }
  return (
    <>
      <Navbar value={liveSearch} setValue={setLiveSearch}/>
      
      {/* {
        () => {
          const filterProduct = product.filter(item => item.title.toLowerCase().includes(liveSearch))
          return(setProduct(filterProduct))
        }

      } */}
      
      {
        
      }
      <div className='h-full flex justify-center'>
          <div className='ml-10 flex-row mr-10 w-9/12'>
              <div className='h-10'> </div>

              <MyProductButton />
              
              <GridListView isHomepage={true} listProduct={listProduct} liveSearch={liveSearch}/>
              

              <div className='h-10'></div>
              <SubappButton/>
          </div>
      </div>
    </>
  );
}

export default Homepage;
