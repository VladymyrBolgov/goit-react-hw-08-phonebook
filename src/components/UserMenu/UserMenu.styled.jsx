import styled from '@emotion/styled';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserTitle = styled.p`
margin-right: 10px;
`

export const LogOutButton = styled.button`
  display: block;
  width: 80px;
  color: black;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: red;
  }
`;
