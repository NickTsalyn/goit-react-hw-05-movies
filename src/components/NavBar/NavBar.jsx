import { Container, Header, Nav, NavItemLink, NavList } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <NavList>
            <li>
              <NavItemLink to="/">HOME</NavItemLink>
            </li>
            <li>
              <NavItemLink to="/movies">MOVIES</NavItemLink>
            </li>
          </NavList>
        </Nav>
      </Container>
    </Header>
  );
};
