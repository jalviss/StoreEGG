import React, { useState } from 'react';
import GridViewIcon from '../../assets/GridViewIcon';
import ListViewIcon from '../../assets/ListViewIcon';
import GridView from './grid_card/gridView';
import ListView from './list_card/listView';
import { IProduct } from './interface/IProduct';

function GridListView({isHomepage, listProduct, liveSearch} : {isHomepage:boolean, listProduct: IProduct[], liveSearch:string} ) {
    const [gridView, setGridView] = useState(true)
    const [product, setProduct] = useState(listProduct)
    
  return (
    <div>
        <div className='w-30 flex justify-between'>
            <div className='flex items-start  w-30 p-2 pl-5 mt-5 text-gray-500 font-bold'>
                Home {'>'} Product List
            </div>
            
            <div>
                {gridView ? (
                    <button onClick={() => setGridView(gv => !gv)}><GridViewIcon/></button>
                ) : (
                    <button onClick={() => setGridView(gv => !gv)}><ListViewIcon/></button>
                )}
            </div>
        </div>
        
        {   
            // if(liveSearch !== null){
            //     let filteredProduct = listProduct.filter(item => item.title.toLowerCase().includes(liveSearch))
            //     setProduct(listProduct)
            // }
            // else{
            //     setProduct(listProduct)
            // }
            listProduct.filter((item => liveSearch !== null ? item.title.toLowerCase().includes(liveSearch): true)).map((item, i) => {
                return(
                    <div className='flex flex-col justify-center'>
                        {gridView ? (
                            <div className='flex flex-col justify-around'>
                                <GridView product = {item} isHomepage = {isHomepage}/>
                             </div>
                        ) : (
                            <div>
                                <ListView product = {item} isHomepage = {isHomepage}/>
                            </div>
                        )}
                    </div>
                )
            })
        }            
        
    </div>
);
}

export default GridListView;
