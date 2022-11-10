import { Container } from "components/Container.styled";
import Loader from "components/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation, Link } from "./SharedLayout.styled";


const SharedLayout = () => {
  return (
    <>
        <Container>
            <Header>
                <Navigation>
                    <Link to="/" end>Home</Link>  
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/contacts">Contacts</Link>
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