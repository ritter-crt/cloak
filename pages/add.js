import Form from "@/src/components/Form";
import NavBar from "@/src/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/src/components/styled";

export default function Add() {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledHeader>Upload</StyledHeader>
        <Form />
      </ContentWrapper>
    </>
  );
}
