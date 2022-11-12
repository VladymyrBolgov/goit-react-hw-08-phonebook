import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import userAuthOperations from 'redux/Auth/operations';

const styles = {
    form: {
      width: 320,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
    },
  };

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
      };

      const handleSubmit = e => {
        e.preventDefault();
        dispatch(userAuthOperations.logIn({ email, password }));
          reset();
    };
    
    const reset = () => {
        setEmail('');
        setPassword('');
    };
        
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email
            <input
                type="email"
                name="email" 
                value={email}
                onChange={handleChange}
                required 
                />
        </label>
        <label style={styles.label}>
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
                type="submit">
                  Login
              </button>
        </form>
    </div>
  )
}