import Login from "@/src/components/Login";
import NavBar from "@/src/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/src/components/styled";
import styled from "styled-components";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledDiv></StyledDiv>
        <StyledHeader>Profile</StyledHeader>
        <Login></Login>
      </ContentWrapper>
    </>
  );
}

const StyledDiv = styled.div`
  height: 500px;
`;
