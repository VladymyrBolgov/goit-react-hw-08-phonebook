import {  useState } from 'react'
import { useDispatch } from 'react-redux';
//import userAuthOperations from 'redux/Auth/operations';
import css from './LoginForm.module.css'
import { logIn } from 'redux/Auth/operations';
//import { Button } from '@mui/material';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleChange = (event) => {
    const { name, value } = event.target;
  
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

      const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
          return alert('Все поля должны быть заполнены');
        }
        //dispatch(userAuthOperations.logIn({ email, password }));
        dispatch(logIn({ email, password }));
    };
       
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email
            <input
                type="email"
                name="email" 
                value={email}
                onChange={handleChange}
                required 
                />
        </label>
        <label className={css.label}>
          Password
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required     
                />
        </label>
            <button variant="primary"
                type="submit">
                  Login
            </button>
        </form>
    </div>
  )
}