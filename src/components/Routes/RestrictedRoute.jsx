import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
* - Если маршрут ограничен и пользователь вошел в систему, визуализировать <Navigate> для redirectTo
  * - В противном случае визуализировать компонент
 */

export const RestrictedRoute =
  ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn
    ? <Navigate to={redirectTo} />
    : Component;
};


