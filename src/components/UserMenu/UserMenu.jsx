import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { Button } from '@mui/material';
import { HeaderBox, UserTitle } from './UserMenu.styled';


 const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();
 
  return (
    <>
      <h1>Phonebook</h1> 
      <HeaderBox>
        <UserTitle>{email}</UserTitle>
        <Button variannt="outlined" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </HeaderBox>
    </>
  )
  
  }




export default UserMenu;