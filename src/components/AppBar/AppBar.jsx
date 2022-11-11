import { Header, Navigation } from 'components/SharedLayout/SharedLayout.styled';
import React from 'react'
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    
  return (
    <Header>
        <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}    
    </Header>
  )
}
