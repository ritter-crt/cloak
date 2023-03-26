import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Logo></Logo> */}
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  );
}
