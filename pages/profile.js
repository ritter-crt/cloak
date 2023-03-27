import Login from "@/components/Login";
import NavBar from "@/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/components/styled";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledHeader>Profile</StyledHeader>
        <Login></Login>
      </ContentWrapper>
    </>
  );
}
