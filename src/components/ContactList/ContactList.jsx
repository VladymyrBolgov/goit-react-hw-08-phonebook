import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { selectContactsByName, selectLoadingStatus } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader'
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
 
  return (
    <>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <h2>Phonebook is empty</h2>
      ) : (

        <ContactListBox>
          {isLoading && <Loader />}
          {contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <ContactListText> {name}</ContactListText>
              <ContactListText>{number}</ContactListText>
              <ContactListBtn
                variant="contained"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Remuve
              </ContactListBtn>
            </ContactListItem>
          ))}
        </ContactListBox>
      )}
      </>
  );
};

export default ContactList;
