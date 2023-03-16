import { device } from "@/styles";
import styled from "styled-components";
import { changeOpacity } from "./Animation";

import Image from "next/image";

import HandWorking from "../src/assets/hand-working.jpg";
import TailorWorking from "../src/assets/tailor-with-sewing-machine.jpg";
import Dressmaker from "../src/assets/pile-of-clothes.jpeg";

export default function Collage() {
  return (
    <CollageWrapper>
      <StyledText>
        CLOAK is a platform dedicated to exchange, sell and get sewing patterns.
      </StyledText>

      <ImageWrapperOne
        src={TailorWorking}
        placeholder="blur"
        height="300"
        width="200"
        alt="working Hand"
      ></ImageWrapperOne>

      <ImageWrapperTwo
        src={HandWorking}
        placeholder="blur"
        height="100"
        width="150"
        alt="working Hand"
      ></ImageWrapperTwo>

      <ImageWrapperThree
        src={Dressmaker}
        placeholder="blur"
        height="250"
        width="320"
        alt="working Hand"
      ></ImageWrapperThree>
    </CollageWrapper>
  );
}

const CollageWrapper = styled.div`
  width: 100%;
  height: 38rem;
  position: relative;
  animation-name: ${changeOpacity};
  animation-duration: 6s;
  animation-iteration-count: 1;
  @media ${device.mobileL} {
    height: 700px;
  }
`;

const ImageWrapperOne = styled(Image)`
  position: absolute;
  left: 10%;
  object-fit: cover;
  @media ${device.mobileL} {
    height: 600px;
    width: 500px;
  }
`;

const ImageWrapperTwo = styled(Image)`
  position: absolute;
  top: 7%;
  right: 10%;
  object-fit: cover;
  @media ${device.mobileL} {
    top: 7%;
    right: 20%;
    margin-top: 20px;
    height: 200px;
    width: 300px;
  }
`;

const ImageWrapperThree = styled(Image)`
  position: absolute;
  top: 55%;
  left: 10%;
  object-fit: cover;
  @media ${device.mobileL} {
    margin-top: 50px;
    top: 100%;
    margin-top: 20px;
    height: 500px;
    width: 640px;
  }
`;

export const StyledText = styled.div`
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
    width: 40%;
    bottom: 34%;
    font-size: 20pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 2px;
  }
`;
