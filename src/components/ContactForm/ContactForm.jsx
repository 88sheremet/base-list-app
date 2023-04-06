import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/operations';
import {  useFormik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
// import { object, string, number, date, InferType } from 'yup';

export const ContactForm = () => {
  // const contactsObj = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  // const onHandleSubmit = e => {
  //   e.preventDefault();
  //   const { name, phone } = e.target.elements;

  //   if (
  //     contactsObj.some(
  //       user => user.name.toLowerCase() === name.value.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${name.value} is already in contacts`);
  //   }

  //   const contact = {
  //     name: name.value,
  //     phone: phone.value,
  //   };

  //   dispatch(addContact(contact));
  //   e.target.reset();
  // };


  let formik=useFormik({
    initialValues:{
      rating:'',
      title: '',
      images: '-',
      description: '',
      price: '',
      id:nanoid(),
    },validationSchema:yup.object({
      title:yup.string().max(25, 'Must be 25 characters or less').required('*required'),
      description:yup.string().max(300, 'Must be 300 characters or less').required('*required'),
      price:yup.number().min(0, 'Must be positive').required('*required'),
      rating:yup.number().min(0, 'Must be from 0 to 5')
      .max(5, 'Must be from 0 to 5').required('*required')
    }),onSubmit(values){
      console.log(values)
      handleSubmit(values)
    }
  })
  let handleSubmit=async(data)=>{
 console.log(data)
 dispatch(addProduct(data));
   
      
    }

  return (
    <>
    <div >
    
    <form className={css.form} onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit()}}>
     <input    className={css.input} type="text" name='title' onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} placeholder="Name" required/>
     {formik.touched.title && formik.errors.title ?<div style={{color:"red" }}>{formik.errors.title}</div>:null}
     <input    className={css.input} type="text" name='description' onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} placeholder="Author" required/>
     {formik.touched.description && formik.errors.description ?<div style={{color:"red"}}>{formik.errors.description}</div>:null}
     <input    className={css.input} type="number" name='price' onChange={formik.handleChange} value={formik.values.price} onBlur={formik.handleBlur} placeholder="Year" required/>
     {formik.touched.price && formik.errors.price ?<div style={{color:"red"}}>{formik.errors.price}</div>:null}
     <input    className={css.input}  type="number" name='rating' onChange={formik.handleChange} value={formik.values.rating} onBlur={formik.handleBlur} placeholder="Rating" required/>
     {formik.touched.rating && formik.errors.rating ?<div style={{color:"red"}}>{formik.errors.rating}</div>:null}
     <button className={css.buttonAdd} type='submit'>Add Product</button>
     
   </form>
 </div>
   
</>
  );
};
