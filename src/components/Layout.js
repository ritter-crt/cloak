import Footer from './Footer';
import { ContentWrapper } from './common/ContentWrapper.styles';

export default function Layout({ children }) {
  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer></Footer>
    </>
  );
}
