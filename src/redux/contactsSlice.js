import { createSlice } from '@reduxjs/toolkit';
import {  fetchProducts, deleteProduct, addProduct } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  products: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.products.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.isLoading = false;
        state.products.error = null;
        state.products.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload.message;
      })
      .addCase(deleteProduct.pending, state => {
        state.products.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products.isLoading = false;
        state.products.error = null;
        state.products.items = state.products.items.filter(item => {
          return item.id !== action.payload.id;
        });
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload.message;
      })
      .addCase(addProduct.pending, state => {
        state.products.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        console.log(action.payload)
        state.products.isLoading = false;
        state.products.error = null;
        state.products.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload.message;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
export const productsReducer = contactSlice.reducer;

export const { addContactAction, deleteProductAction } = contactSlice.actions;
