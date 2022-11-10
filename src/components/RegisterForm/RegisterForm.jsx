import React from 'react'
//21 минута
export const RegisterForm = ()=>  {
  return (
    <div>
      <form>
        <label>
          Username
          <input type="text" name="name"/>
        </label>
        <label>
          Email
          <input type="email" name="email"/>
        </label>
        <label>
          Password
          <input type="password" name="password"/>
        </label>
        <button>Register</button>
        </form>
    </div>
  )
}
