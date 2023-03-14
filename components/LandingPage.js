import Image from "next/image";
import styled from "styled-components";
import BackgroundImage from "../src/assets/sewer-with-mannequin.jpg";

export default function LandingPage() {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>cloak</StyledHeader>
        <StyledImage
          src={BackgroundImage}
          placeholder="blur"
          height={600}
          width={500}
          alt="sewer with mannequin"
        ></StyledImage>
      </StyledWrapper>
      <StyledText>
        {" "}
        Create your own garment. Comfortable, functional, and suitable. <br />
        Fashion that fits you.
      </StyledText>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
`;
const StyledHeader = styled.h1`
  font-weight: 30;
  font-size: 5rem;
  text-transform: lowercase;
  letter-spacing: 0.5rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255);
  z-index: 1;
`;
const StyledText = styled.div`
  padding: 10%;
  width: 85%;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 11pt;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100% !important;
  position: relative;
  height: unset;
`;
