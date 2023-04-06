
import { Suspense, lazy } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { fetchProducts } from 'redux/operations';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Loader } from '../Loader/Loader';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from '../App/App.module.css';
const Home = lazy(() => import('../../pages/Home/Home'));
const AddProduct = lazy(() => import('../../pages/AddProduct/AddProduct'));
export const App = () => {
  // const dispatch = useDispatch();
  // const loader = useSelector(state => state.contacts.contacts.isLoading);

  // useEffect(() => {
   
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <>
    <header>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? css.home && css.active : css.home
        }
      >
         Products
      </NavLink>
      <NavLink
        to="/addproduct"
        className={({ isActive }) =>
          isActive ? css.movies && css.active : css.movies
        }
      >
         Add Product
      </NavLink>
    </nav>
  </header>
  <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
     
     
    </>
  );
};
