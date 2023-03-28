import { device, changeOpacity } from "@/styles";
import styled from "styled-components";

import Image from "next/image";

import HandWorking from "../assets/hand-working.jpg";
import TailorWorking from "../assets/tailor-with-sewing-machine.jpg";
import Dressmaker from "../assets/male-dressmaker-with-computer.jpg";
import SewingMachine from "../assets/sewing_machine.avif";

export default function Collage() {
  return (
    <>
      <CollageWrapper>
        <StyledText>
          CLOAK is a platform dedicated to exchange, sell and get sewing
          patterns.
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

      <ImageWrapperFour
        src={SewingMachine}
        placeholder="blur"
        height="250"
        width="420"
        alt="working Hand"
      ></ImageWrapperFour>
    </>
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
    height: 1300px;
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
    bottom: 10%;
    left: 10%;
    margin-top: 20px;
    height: 500px;
    width: 640px;
  }
`;

const ImageWrapperFour = styled(Image)`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  @media ${device.mobileL} {
    height: 800px;
  }
`;

export const StyledText = styled.div`
  width: 40%;
  bottom: 46%;
  position: absolute;
  right: 3%;
  padding: 33px;
  line-height: 1.2rem;
  font-size: 10pt;
  color: black;
  @media ${device.mobileL} {
    width: 40%;
    bottom: 34%;
    font-size: 18pt;
    line-height: 2rem;
    padding: 2px;
  }
`;
