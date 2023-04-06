import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://dummyjson.com/';

const privateAPI = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const productInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

privateAPI.interceptors.request.use(productInterceptor);

export const ContactsAPI = {
  async getProducts(signal) {
    const { data } = await privateAPI.get(`/products`, signal);
    return await data;
  },
  async addContact(contactData) {
    const { data } = await privateAPI.post(`/products/add`, {
      ...contactData, 
    });
    console.log(data)
    return await data;
  },
 
};

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response =  await ContactsAPI.getProducts();
      
      console.log(response.products)
      return response.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, thunkAPI) => {
    try {
      
      const response = await ContactsAPI.addContact(product);
      console.log(response)
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
