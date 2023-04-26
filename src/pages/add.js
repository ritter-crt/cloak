import Form from '@/src/components/Form';
import NavBar from '@/src/components/common/NavBar/NavBar';

import { ContentWrapper } from '../components/common/Wrapper.styles';
import { Header } from '../components/common/Text.styles';

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
