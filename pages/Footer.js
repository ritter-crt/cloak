import { device } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
import TalkAboutUs from "../src/assets/555.png";

export default function Footer() {
  return (
    <>
      <StyledText>They talk about us</StyledText>
      <StyledImage src={TalkAboutUs} height="200" width="400"></StyledImage>
    </>
  );
}

const StyledImage =styled(Image)`
width: 100%;
  object-fit: contain;
`;

export const StyledText = styled.div`
left:10%;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 11pt;
  color: black;
  @media ${device.mobileL} {
    font-size: 20pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 2px;
  }
`;
