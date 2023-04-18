import Form from '@/src/components/Form';
import NavBar from '@/src/components/NavBar';
import { StyledHeader } from '@/src/components/styled';
import { ContentWrapper } from '../components/Text.styles';

export default function Add() {
  return (
    <>
      <title>upload your sewing pattern</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledHeader>upload</StyledHeader>
        <Form />
      </ContentWrapper>
    </>
  );
}
