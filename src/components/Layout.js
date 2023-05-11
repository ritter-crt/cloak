import Footer from './ui/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
