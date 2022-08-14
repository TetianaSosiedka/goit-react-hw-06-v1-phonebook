import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';
import { setFilter } from 'redux/filterSlice';

const ContactsBook = () => {
  const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get('filter') || '';
    console.log(filter);
    if (!filter) {
      dispatch(setFilter(''));
    }
    dispatch(setFilter(filter));

    console.log('useEffect');
  }, [dispatch, searchParams]);

  return (
    <>
      <h2>Contacts</h2>
      {items.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You have no contacts</p>
      )}
    </>
  );
};

export default ContactsBook;
