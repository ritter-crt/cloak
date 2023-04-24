import { NavLink, NavMenu } from './RightNavBar.styles';

export default function RightNav({ open }) {
  return (
    <>
      <NavMenu open={open}>
        <li>
          <NavLink href="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/add">Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/profile">Profile</NavLink>
        </li>
      </NavMenu>
    </>
  );
}
