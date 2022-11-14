
import { useAuth } from 'hooks'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {userAuthOperations} from 'redux/Auth/operations'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate

  const logOut = () => {
    dispatch(userAuthOperations.logOut())
    navigate('/login')

  }

  return (
    <div>
          <p>Welcome, {user.name}</p>
          <button type='button' onClick={logOut}>Logout</button>
    </div>
  )
}