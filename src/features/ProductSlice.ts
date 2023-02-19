// import { IProduct } from "../components/view_style/interface/IProduct";
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface myProductState {
//     myProducts: IProduct[];
// }

// const initialState: myProductState = {
//     myProducts: [],
// };

// const productSlice = createSlice({
//     name: 'myProducts',
//     initialState,
//     reducers:{
//         add: (state, action: PayloadAction<IProduct>) => {
//         // state.myProducts.map((item, i) => {
//         //     if(item.title === action.payload.title){
//         //         initialState.count+=1
//         //     }
//         //     return state.myProducts
//         // })
//         // const tempProduct = {...action.payload, productQuantity: 1}
//             state.myProducts.push(action.payload);
//         },
//         remove: (state, action: PayloadAction<IProduct>) => {
//             state.myProducts = state.myProducts.filter(
//                 mp => mp.id !== action.payload.id,
//             );
//         },
//     }
// })

// export const { add, remove } = productSlice.actions;
// export default productSlice.reducer;
// export const selectMyProduct = () => state.myProducts.myProducts;

import { IProduct } from "../components/view_style/interface/IProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../redux/redux";


interface MyProductState {
    myProducts: IProduct[];
}

const initialState: MyProductState = {
    myProducts: [],
};

export const myProductsSlice = createSlice({
    name: 'myProducts',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<IProduct>) => {
        // state.myProducts.map((item, i) => {
        //     if(item.title === action.payload.title){
        //         initialState.count+=1
        //     }
        //     return state.myProducts
        // })
        // const tempProduct = {...action.payload, productQuantity: 1}
        state.myProducts.push(action.payload);
      },
      remove: (state, action: PayloadAction<IProduct>) => {
        state.myProducts = state.myProducts.filter(
          mp => mp.id !== action.payload.id,
        );
      },
    },
  });

  export const { add, remove } = myProductsSlice.actions;
  export const selectMyProduct = (state: RootState) => state.myProducts.myProducts;