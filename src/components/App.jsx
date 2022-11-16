import { useAuth } from 'hooks';
import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/operations';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const LogIn = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
 <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
          />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default App;





