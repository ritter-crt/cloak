import Burger from './Burger';
import { Nav, NavDiv, NavLogo } from './NavBar.styles';

export default function NavBar() {
  return (
    <>
      <NavDiv />
      <Nav>
        <NavLogo href="/" className="logo">
          cloak
        </NavLogo>
        <Burger />
      </Nav>
    </>
  );
}
