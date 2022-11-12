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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
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
    console.log({ name, email, password });
    dispatch(userAuthOperations.register({ name, email, password }));
    reset();
  }
  
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  
  return (
    <div>
      <form  style={styles.form}>
        <label style={styles.label}>
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
        <label style={styles.label}>
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
        <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}
