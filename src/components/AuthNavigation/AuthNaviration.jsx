import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { Link } from './AuthNavigation.styled'


export const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
      <Link to="/" end>Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
    </>
  );
};

export default AuthNavigation;