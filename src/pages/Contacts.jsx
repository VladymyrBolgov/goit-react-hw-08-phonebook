import React from 'react';
import { Container } from 'components/Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
      <>
          <section >
            <Container >
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Container>
            </section>
      </>
    );
  }

export default Contacts;
