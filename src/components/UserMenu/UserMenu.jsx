import { useAuth } from 'hooks'
import React from 'react'
import { useDispatch } from 'react-redux'
import {userAuthOperations} from 'redux/Auth/operations'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
 
  const logOut = () => {
    dispatch(userAuthOperations.logOut())
  }

  return (
    <div>
          <p>Welcome, {user.name}</p>
          <button type='button' onClick={logOut}>Logout</button>
    </div>
  )
}