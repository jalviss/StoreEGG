import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from "../redux/redux";


interface CoinState {
    coin: number;
}

const initialState: CoinState = {
    coin: 1200,
};

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<number>) => {
        state.coin += action.payload
      },
      min: (state, action: PayloadAction<number>) => {
        state.coin -= action.payload
      },
    },
  });

  export const { add, min } = coinSlice.actions;
  export const selectCoin = (state: RootState) => state.coins.coin;