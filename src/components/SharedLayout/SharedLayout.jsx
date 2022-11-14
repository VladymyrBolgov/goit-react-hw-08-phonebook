import { Container } from "components/Container.styled";
import Loader from "components/Loader";
import { useAuth } from "hooks";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation } from "./SharedLayout.styled";
import UserMenu from 'components/UserMenu';
import AuthNavigation from "components/AuthNavigation";


const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
        <Container>
            <Header>
              <Navigation>
               {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
              </Navigation>
              </Header> 
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
        </Container>   
    </>
  )
}

export default SharedLayout;

          