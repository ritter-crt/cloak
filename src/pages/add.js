import Form from '@/src/components/Form';
import NavBar from '@/src/components/ui/NavBar/Navbar';

import { ContentWrapper } from '../components/ui/Wrapper.styles';
import { Header } from '../components/ui/Text.styles';

export default function Add() {
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
