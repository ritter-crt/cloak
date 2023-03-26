import Login from "@/components/Logout";
import Navigation from "@/components/Navigation";
import { HeaderWrapper, StyledHeader } from "@/components/styled";

export default function Profile() {
  return (
    <>
      <HeaderWrapper>
        <StyledHeader>Profile</StyledHeader>
      </HeaderWrapper>
      <Login></Login>
      <Navigation />
    </>
  );
}
