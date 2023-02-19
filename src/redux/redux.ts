
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { myProductsSlice } from '../features/ProductSlice';
import { coinSlice } from '../features/CoinSlice';
// import ProductReducer from '../features/ProductSlice';


// export const store = configureStore({
//     reducer: {
//         myProduct : ProductReducer
//     }
// })

const rootReducer = combineReducers({
  myProducts : myProductsSlice.reducer,
  coins : coinSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
