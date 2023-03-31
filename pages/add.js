import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/components/styled";

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
