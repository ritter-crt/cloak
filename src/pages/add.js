import NavBar from '@/src/components/ui/NavBar';

import { ContentWrapper } from '../components/ui/Wrapper.styles';
import Header from '../components/ui/Header';
import Form from '../components/Form';
// import Form from '../components/Form';

export default function Add({ children }) {
  return (
    <>
      <title>upload your sewing pattern</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <Header>upload</Header>
        <Form />
      </ContentWrapper>
    </>
  );
}
