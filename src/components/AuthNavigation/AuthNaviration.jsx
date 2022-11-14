import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { Link, NavigationBox} from './AuthNavigation.styled';
 


export const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
      <NavigationBox>
        <Link to="/" end>Home</Link>
        <Link to="/contacts">Phonebook</Link>
      </NavigationBox>
      <NavigationBox>
        <Link to="/register">Register</Link>
        <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
      </NavigationBox>
    </>
  );
};

export default AuthNavigation;