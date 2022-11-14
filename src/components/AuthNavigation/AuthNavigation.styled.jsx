import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
 
export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  text-transform: uppercase;
  text-align: center;
  &.active {
    color: #e84a5f;
  }
  `
   