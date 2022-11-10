import React from 'react'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
  return (
    <div>
        <NavLink>
            Register    
          </NavLink>
          <NavLink>
            Log In    
        </NavLink>
    </div>
  )
}
