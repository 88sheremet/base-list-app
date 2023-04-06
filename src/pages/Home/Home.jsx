import { Loader } from 'components/Loader/Loader';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { fetchProducts } from 'redux/operations';
import { useEffect } from 'react';
// import { Loader } from '../Loader/Loader';
const Home = ()=>{

 
    const dispatch = useDispatch();
    const loader = useSelector(state => state.products.products.isLoading);
    const items = useSelector(state => state.products.products.items);
    console.log(items)
    useEffect(() => {
   
      dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div>
        {/* <h1>Products:</h1> */}
        <ContactForm />

        {/* <h2>Contacts:</h2> */}
        <Filter />
        {loader ? <Loader /> : <ContactList />}
      </div>
    )
}

export default Home;