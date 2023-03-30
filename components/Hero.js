import Image from "next/image";
import BackgroundImage from "@/src/assets/sewer-with-mannequin.jpg";
// import TailorWorking from "../assets/tailor-with-sewing-machine.jpg";
import { changeOpacity, device } from "@/styles";
import styled from "styled-components";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>cloak</StyledHeader>
        <GetStarted href="/login">come in</GetStarted>
        <StyledImage
          src={BackgroundImage}
          height={900}
          width={700}
          alt="sewer with mannequin"
        ></StyledImage>
      </StyledWrapper>
      <StyledText>
        Create your own garment. <br />
        Comfortable, functional, and suitable. <br />
        Fashion that fits you
      </StyledText>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const StyledHeader = styled.h1`
  font-family: "Golos Text", sans-serif;
  animation-name: ${changeOpacity};
  animation-duration: 6s;
  animation-iteration-count: 1;
  font-weight: 30;
  font-size: 60pt;
  text-transform: lowercase;
  letter-spacing: 0.5rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255);
  z-index: 1;

  @media ${device.mobileL} {
    font-size: 150pt;
    letter-spacing: 0.2rem;
    padding: 6%;
    /* color:rgba(0, 0, 0, 0.5) */
  }
`;

const GetStarted = styled(Link)`
  background-color: black;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 10px;
  right: 2%;
  z-index: 2;
  width: 90px;
  margin: 2px;
  align-items: flex-end;
  text-align: center;
  padding: 8px;
  border-radius: 40px;
  border: none;
  transition-delay: 0.1s;
  font-size: 8pt;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media ${device.mobileL} {
    font-size: 12pt;
    width: 100px;
  }
`;
const StyledText = styled.div`
  padding: 10% 10% 5%;
  width: 100%;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 10pt;
  @media ${device.mobileL} {
    font-size: 18pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 6%;
  }
`;

const StyledImage = styled(Image)`
  animation-name: ${changeOpacity};
  animation-duration: 6s;
  animation-iteration-count: 1;
  object-fit: cover;
  width: 100%;
  position: relative;
  height: unset;
`;
