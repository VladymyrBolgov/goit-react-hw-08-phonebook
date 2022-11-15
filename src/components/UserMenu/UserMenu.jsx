import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { Button } from '@mui/material';
import { HeaderBox, UserTitle, UserMenuTitle } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();
 
  return (
    <>
      <UserMenuTitle>Phonebook</UserMenuTitle>
      <HeaderBox>
        <UserTitle>{email}</UserTitle>
        <Button variant="outlined" onClick={() =>
          dispatch(logOut())}>
          Logout
        </Button>
      </HeaderBox>
    </>
  );
};

export default UserMenu;