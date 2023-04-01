import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, productsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});
