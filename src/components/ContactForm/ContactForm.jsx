import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {  useFormik } from 'formik';
import * as yup from 'yup';
// import { object, string, number, date, InferType } from 'yup';

export const ContactForm = () => {
  // const contactsObj = useSelector(state => state.contacts.contacts.items);
  // const dispatch = useDispatch();

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

  // let userSchema = object({
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   email: string().email(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  // });
  

  // let formik = useFormik({
  //   initialValues: {
  //     Name: '',
  //     Author: '',
  //     Rating: '',
  //     YearEdition: '',
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  let formik=useFormik({
    initialValues:{
      name:'',
      author:'',
      year:'',
      rating:''
    },validationSchema:yup.object({
      name:yup.string().required('*required'),
      author:yup.string().required('*required'),
      year:yup.number().required('*required'),
      rating:yup.number().required('*required')
    }),onSubmit(values){
  
      handleSubmit(values)
    }
  })
  let handleSubmit=async(data)=>{
 console.log(data)
    // const id = toast.loading('Please wait...')
    //   let res = await axios.post(`${env.REACT_APP_API_URL}register`,data)
    //   if(res.data.statuscode ===200){
    //     toast.update(id,{render:'Check you mail for verification link',type:'success',isLoading:false,autoClose:true,closeButton:true})
        
    //   }else{
    //     toast.update(id,{render:res.data.message,type:'error',isLoading:false,autoClose:true,closeButton:true})
    //     }
      
    }

  return (
    <>
    <div >
    
    <form  onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit()}}>
     <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder="Name" required/>
     {formik.touched.name && formik.errors.name ?<div style={{color:"red" }}>{formik.errors.name}</div>:null}
     <input type="text" name='author' onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur} placeholder="Author" required/>
     {formik.touched.author && formik.errors.author ?<div style={{color:"red"}}>{formik.errors.author}</div>:null}
     <input type="number" name='year' onChange={formik.handleChange} value={formik.values.year} onBlur={formik.handleBlur} placeholder="Year" required/>
     {formik.touched.year && formik.errors.year ?<div style={{color:"red"}}>{formik.errors.year}</div>:null}
     <input type="number" name='rating' onChange={formik.handleChange} value={formik.values.rating} onBlur={formik.handleBlur} placeholder="Rating" required/>
     {formik.touched.rating && formik.errors.rating ?<div style={{color:"red"}}>{formik.errors.rating}</div>:null}
     <button type='submit'>Add Product</button>
     
   </form>
 </div>
    {/* <form onSubmit={onHandleSubmit} className={css.form}>
      <label>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.buttonAdd} type="submit">
        add contact
      </button>
    </form>

    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="Name"> Name</label>
       <input
         id="Name"
         name="Name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Name}
       />
        <label htmlFor="firstName">Author</label>
       <input
         id="Author"
         name="Author"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Author}
       />
 
       <label htmlFor="Rating">Rating</label>
       <input
         id="Rating"
         name="Rating"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.Rating}
       />
 
       <label htmlFor="YearEdition">Year Edition</label>
       <input
         id="YearEdition"
         name="YearEdition"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.YearEdition}
       />
 
       <button type="submit">Submit</button>
     </form> */}
</>
  );
};
