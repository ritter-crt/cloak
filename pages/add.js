import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/components/styled";

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
