import Footer from './ui/Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
