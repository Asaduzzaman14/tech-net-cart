import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import { api } from './api/apiSlice';
import userSlice from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
// https://tech-net-server-lyart.vercel.app/products
