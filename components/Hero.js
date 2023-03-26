import Image from "next/image";
import BackgroundImage from "../src/assets/sewer-with-mannequin.jpg";
import { changeOpacity, device } from "@/styles";
import styled from "styled-components";
import { StyledButton } from "./Button";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Hero() {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>cloak</StyledHeader>
        <GetStarted href="/home">join us</GetStarted>
        <StyledImage
          src={BackgroundImage}
          placeholder="blur"
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
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
  position: absolute;
  top: 15px;
  right: 5%;
  z-index: 2;
  width: 100px;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 2px;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;
  background-color: black;
  border-radius: 40px;
  border: none;
  transition-delay: 0.3s;
  font-size: 10pt;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
const StyledText = styled.div`
  padding: 10%;
  width: 85%;
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
