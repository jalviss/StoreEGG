import React, { useState } from 'react';
import { IProduct } from "../interface/IProduct";
import Modal from '../../modal/Modal';

function ListView({product, isHomepage}: {product: IProduct, isHomepage:boolean}) {

    const [isModalShown, setIsModalShown] = useState(false);
    return (
          <div>
            <div className='container cursor-pointer shadow-lg flex border-1 w-100 bg-white hover:bg-slate-50 border-black p-3 mx-5 mt-5 mr-20' onClick={() => setIsModalShown(true)}>
              <div className='container flex'>
                  <div className='flex justify-center w-3/12 h-3/12'>
                      <div className='h-full w-3/12 border-1 mx-5 rounded-md border-black'><img className='' src={product.image} alt='' /></div>
                  </div>
                  <div className='flex justify-center items-center'>
                      <div className='flex-row justify-center '>
                          <div className='font-bold'>{product.title}</div>
                          <div className='font-semibold'>$ {product.price}</div>
                          <div className='text-slate-500'>
                              Description :
                              <p className="line-clamp-4">{product.description}</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            {isModalShown && (
              <Modal onClick={() => setIsModalShown(false)} product={product} isHomepage={isHomepage}/>
            )}
          </div>
    );
}

export default ListView;
