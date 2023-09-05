import styled from "styled-components";

export const MyHeader = styled.header`
  background-color: #626D71;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding: 1%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const NavLinks = styled.div`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const NavLink = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: white;

  &:hover {
    color: #B38867;
    text-shadow: #282c34;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`