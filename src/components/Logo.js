import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

export default function Logo() {
  const router = useRouter();
  return (
    <LogoWrapper>
      <StyledLogo onClick={() => router.push("/")}>cloak</StyledLogo>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  top: 0;
  display: flex;
  justify-content: space-between;

  position: fixed;
  background-color: white;
  width: 100%;
  opacity: 70%;
`;
const StyledLogo = styled.p`
  text-decoration: none;
  color: black;
  cursor: pointer;
  z-index: 1;
`;
const StyledMenu = styled(Image)`
  z-index: 1;
`;
