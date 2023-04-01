import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {  useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';

export const ContactForm = () => {
  const contactsObj = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;

    if (
      contactsObj.some(
        user => user.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts`);
    }

    const contact = {
      name: name.value,
      phone: phone.value,
    };

    dispatch(addContact(contact));
    e.target.reset();
  };

  let userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });
  // const user = await userSchema.validate(await fetchUser());
  // type User = InferType<typeof userSchema>;  

  const formik = useFormik({
    initialValues: {
      Name: '',
      Author: '',
      Rating: '',
      YearEdition: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <form onSubmit={onHandleSubmit} className={css.form}>
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
     </form>
</>
  );
};
