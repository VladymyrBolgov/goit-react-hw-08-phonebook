import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          case 'email':
            return setEmail(value);
          case 'password':
            return setPassword(value);
          default:
            return;
        }
      };

      const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
      };
    
  return (
    <div>
      <form>
        <label>
          Email
            <input
                type="email"
                name="email" 
                value={email}
                onChange={handleChange}
                required 
                />
        </label>
        <label>
          Password
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required     
                />
        </label>
            <button
                type="submit"
                onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}