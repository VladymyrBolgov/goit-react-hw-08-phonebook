import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigation = styled.nav`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  display: block;
  width: 90px;
  color: black;
  text-transform: uppercase;
  font-weight: 800;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: tomato;
  }
`;