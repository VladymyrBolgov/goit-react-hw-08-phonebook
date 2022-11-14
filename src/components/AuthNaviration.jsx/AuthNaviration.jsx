import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';


export const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
      <Link to="/" end>
        Home
      </Link>
      <Link  to="/register">
          Register    
      </Link>
      <Link  to="/login">
        Log In    
      </Link>
    </>
  )
}
