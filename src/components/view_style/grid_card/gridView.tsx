import React, { useState } from "react";
import { IProduct } from "../interface/IProduct";
import Modal from "../../modal/Modal";

function GridView({product, isHomepage}: {product: IProduct, isHomepage:boolean}) {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <div>
      <div className="container flex border-1 w-48 bg-white hover:bg-slate-50 shadow-lg border-black p-3 mx-5 mt-5 mr-5 cursor-pointer" onClick={() => setIsModalShown(true)}>
        <div className="container flex-row justify-around">
            <div className="flex justify-center mb-2">
                <div className="w-24 border-1 rounded-md border-black">
                <img
                    src={product.image}
                    alt=""
                />
                </div>
            </div>
            <div>
                <div className="font-bold">{product.title}</div>
                <div className="font-semibold">$ {product.price}</div>
                <div className="text-slate-500">
                Description :<p className="line-clamp-6">{product.description}</p>
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

export default GridView;
