import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
* - Если маршрут частный и пользователь вошел в систему, визуализировать компонент
  * - В противном случае визуализируйте <Navigate> в redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect
    ? <Navigate to={redirectTo} />
    : Component;
};