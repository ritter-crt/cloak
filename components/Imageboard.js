import { device } from "@/styles";
import styled from "styled-components";
import { changeOpacity } from "./Animations";

import Image from "next/image";

import HandWorking from "../src/assets/hand-working.jpg";
import TailorWorking from "../src/assets/tailor-with-sewing-machine.jpg";
import Dressmaker from "../src/assets/pile-of-clothes.jpeg";

export default function ImageBoard() {
  return (
    <ImageWrapper>
      <StyledText>
        CLOAK is a platform dedicated to exchange, sell and get sewing patterns.
      </StyledText>
      <StyledImageOne>
        <StyledImage
          src={TailorWorking}
          placeholder="blur"
          height="300"
          width="200"
          alt="working Hand"
        ></StyledImage>
      </StyledImageOne>
      <StyledImageTwo>
        <StyledImage
          src={HandWorking}
          placeholder="blur"
          height="100"
          width="150"
          alt="working Hand"
        ></StyledImage>
      </StyledImageTwo>
      <StyledImageThree>
        <StyledImage
          src={Dressmaker}
          placeholder="blur"
          height="200"
          width="320"
          alt="working Hand"
        ></StyledImage>
      </StyledImageThree>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 38rem;
  position: relative;
  animation-name: ${changeOpacity};
  animation-duration: 6s;
  animation-iteration-count: 1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
const StyledImageOne = styled.div`
  position: absolute;
  left: 10%;
  /* @media ${device.mobileL} {
    left: 10%;
    width: 550px;
    height: 800px;
  } */
`;

const StyledImageTwo = styled.div`
  position: absolute;
  top: 7%;
  right: 10%;
`;

const StyledImageThree = styled.div`
  position: absolute;
  top: 50%;
  padding: 10%;
`;

const StyledText = styled.div`
  width: 40%;
  bottom: 44%;
  position: absolute;
  right: 3%;
  padding: 33px;
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
