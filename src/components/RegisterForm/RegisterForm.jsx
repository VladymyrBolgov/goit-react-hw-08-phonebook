import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/Auth/operations';
import userAuthOperations from 'redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))
    form.reset();

    const { name, value } = e.currentTarget
        
        console.log('event.currentTarget.name =>', e.currentTarget.name )
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
  }
  function handleInputSubmit  (event) {
    event.preventDefault();
    console.log({ name, email, password });
    dispatch(userAuthOperations.userRegistration({ name, email, password }));
    reset();
    navigate('/contacts');
}

const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  }
  
  return (
    <div>
      <form>
        <label>
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
        <label>
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
        <label>
          Password
          <input
            type="password"
            name="password" 
            value={password}
            onChange={handleSubmit}
            required
            />
        </label>
        <button type="submit" onClick={handleInputSubmit}>Register</button>
        </form>
    </div>
  )
}
