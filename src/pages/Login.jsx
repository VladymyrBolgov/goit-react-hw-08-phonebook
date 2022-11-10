import React from 'react'

const Login = () => {

  return (
    <div>
    <form>
      
      <label>
        Email
        <input type="email" name="email"/>
      </label>
      <label>
        Password
        <input type="password" name="password"/>
      </label>
      <button>Login</button>
      </form>
  </div>
  )
}

export default Login;

