import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from 'redux/operations';
import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contactsArr = useSelector(state => state.contacts.contacts.items);
  const productsArr = useSelector(state => state.products.products.items);
  const filteredProductsArr = productsArr.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );
  // const filteredContactsArr = contactsArr.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const dispatch = useDispatch();
  const removeContact = productId => {
    dispatch(deleteProduct(productId));
  };

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>PRICE</th>
          <th>RATING</th>
          <th>STOCK</th>
          <th>CATEGORY</th>
          <th>IMAGE</th>
        </tr>
      </thead>

      <tbody>
        {filteredProductsArr.map((product) => {
        
          return (
            <tr key={product.id}>
             <td >{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
             <td>{product.price}</td>
             <td >{product.rating}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
             <td><img src={`${product.images[0]}`} alt={product.title} width="100px" height="100px" /></td>
             <td> <button
              className={css.buttonDel}
              type="button"
              name="delete"
                      onClick={() => removeContact(product.id)}
             >
               Delete
            </button> </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
      }

   
           
         



 