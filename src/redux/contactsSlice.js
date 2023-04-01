import { createSlice } from '@reduxjs/toolkit';
import { addContact,  fetchProducts, deleteProduct } from './operations';

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
      // .addCase(fetchContacts.pending, (state, action) => {
      //   state.contacts.isLoading = true;
      // })
      // .addCase(fetchContacts.fulfilled, (state, action) => {
      //   state.contacts.isLoading = false;
      //   state.contacts.error = null;
      //   state.contacts.items = action.payload;
      // })
      // .addCase(fetchContacts.rejected, (state, action) => {
      //   state.contacts.isLoading = false;
      //   state.contacts.error = action.payload.message;
      // })
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
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
export const productsReducer = contactSlice.reducer;

export const { addContactAction, deleteProductAction } = contactSlice.actions;
