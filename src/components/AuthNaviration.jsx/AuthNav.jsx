import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import css from './AuthNav.module.css'

export const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
        <NavLink className={css.link} to="/register">
            Register    
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log In    
        </NavLink>
    </>
  )
}
