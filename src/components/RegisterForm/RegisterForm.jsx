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
        return setName(value);
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
    dispatch(userAuthOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  
  return (
    <div>
      <form style={styles.form}>
        <label style={styles.label}>
          Username
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleSubmit}
            required/>
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={email}
            onChange={handleSubmit}
            required
            />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password" 
            value={password}
            onChange={handleSubmit}
            required
            />
        </label>
        <button type="submit" onClick={handleChange}>Register</button>
        </form>
    </div>
  )
}
