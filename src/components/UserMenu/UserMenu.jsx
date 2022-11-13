//import { useAuth } from 'hooks'
/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import userAuthSelectors from 'redux/Auth/selectors';
import userAuthOperations from 'redux/Auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(userAuthSelectors.getUserEmail);

  const logout = () => {
    dispatch(userAuthOperations.logOut())
    navigate('/login')
  }
  return (
    <div>
          <p>Welcome, {email}</p>
          <button type='button' onClick = { logout}>Logout</button>
    </div>
  )
}*/

import { useAuth } from 'hooks'
import React from 'react'

export const UserMenu = () => {
    const {user} = useAuth
  return (
    <div>
          <p>Welcome, {user.name}</p>
          <button type='button'>Logout</button>
    </div>
  )
}