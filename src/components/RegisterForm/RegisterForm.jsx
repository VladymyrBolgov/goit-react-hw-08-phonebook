//import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userAuthOperations from 'redux/Auth/operations';
import css from './RegisterForm.module.css'
import Notiflix from 'notiflix';
import { setAuthStatus } from 'redux/actions/contactsActions';


export const RegisterForm = () => {
  const authStatus = useSelector(state => state.auth.authStatus);

  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authStatus === 'RegError') {
      Notiflix.Notify.failure('Error: incorrectly entered email or password');
    }
  }, [authStatus]);

  useEffect(() => {
   return () => dispatch(setAuthStatus());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    switch (name) {
      case 'name':
          setName(value);
          break;
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
    if (name === '' || email === '' || password === '') {
      return alert('Все поля должны быть заполнены');
    }
    console.log({ name, email, password });
    dispatch(userAuthOperations.register({ name, email, password }));
  }

  return (
    <div>
      <form  onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Username
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required/>
        </label>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
        <button  type="submit" variant="primary">Register</button>
        </form>
    </div>
  )
}
