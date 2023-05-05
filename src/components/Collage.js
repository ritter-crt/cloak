import styled from 'styled-components';

import Image from 'next/image';

import { StyledImage } from './Card/Card.styles';

import HandWorking from '@/src/assets/hand-working.jpg';
import TailorWorking from '@/src/assets/tailor-with-sewing-machine.jpg';
import Fabric from '@/src/assets/fabrics.jpg';
import PileOfClothes from '@/src/assets/pile-of-clothes.jpeg';
import { changeOpacity, device } from '../styles';

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
      </CollageWrapper>
      <ImageWrapperThree>
        <StyledImage
          src={PileOfClothes}
          placeholder="blur"
          height="200"
          width="300"
          alt="working Hand"
        ></StyledImage>
      </ImageWrapperThree>
      <Container>
        <StyledParagraph>
          Calling all sewing lovers! <br></br>
          <br></br>We invite you to join cloak.
        </StyledParagraph>

        {/* We invite you to join cloak. */}
        <ImageWrapperFour>
          <StyledImage
            src={Fabric}
            placeholder="blur"
            height="200"
            width="200"
            alt="working Hand"
          ></StyledImage>
        </ImageWrapperFour>
      </Container>
    </>
  );
}

const CollageWrapper = styled.div`
  width: 100%;
  height: 19rem;
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
  object-fit: fit-content;
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

const ImageWrapperThree = styled.div`
  width: 100%;
  padding: 10% 10% 10% 10%;
  object-fit: cover;
  @media ${device.mobileL} {
    height: 200px;
    width: 40px;
  }
`;

const ImageWrapperFour = styled.div`
  object-fit: cover;
  padding: 0% 10% 10% 0%;
  @media ${device.mobileL} {
    height: 800px;
  }
`;

export const StyledText = styled.p`
  width: 40%;
  position: absolute;
  bottom: -3%;
  right: 0%;
  padding: 30px;
  letter-spacing: 0.05rem;
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

const Container = styled.div`
  display: flex;
  justify-content: column;
  align-items: flex-start;
`;

const StyledParagraph = styled.p`
  width: 50%;
  padding: 0% 2% 10% 8%;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 10pt;
  @media ${device.mobileL} {
    font-size: 20pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 0px;
    padding-top: 4rem;
  }
`;
// const Text = styled.p`
//   text-transform: uppercase;
//   line-height: 1.2rem;
//   font-weight: 100;
//   font-size: 9pt;
//   letter-spacing: 2pt;
//   width: 50%;
//   padding: 0% 4% 10% 10%;
// `;
