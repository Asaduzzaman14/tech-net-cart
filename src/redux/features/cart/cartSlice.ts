import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICard {
  products: IProduct[];
}

const initialState: ICard = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (isExist) {
        console.log(isExist);
        isExist.quantity = isExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id != action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
