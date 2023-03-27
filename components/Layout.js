import AuthForm from "./AuthForm";
import Footer from "./Footer";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Logo></Logo> */}

      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
