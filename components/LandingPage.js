import Image from "next/image";
import styled from "styled-components";
import BackgroundImage from "../src/assets/sewer-with-mannequin.jpg";

export default function LandingPage() {
  return (
    <>
    <StyledWrapper>
      <StyledHeader>cloak</StyledHeader>
      <StyledImage src={BackgroundImage} height={500} width={500} alt="sewer with mannequin"></StyledImage>
      </StyledWrapper>
      <StyledText> Create your own garmet. Comfortable, functional, and suitable. <br/>Fashion that fits you.</StyledText>
    </>
  );
}

const StyledText = styled.div`
padding: 10%;
font-weight:100;
letter-spacing: 0.1rem;
line-height: 1.5rem;
font-size: 14pt;
margin-right: 10%;
`

const StyledWrapper = styled.div`
position: relative;

`;

const StyledHeader = styled.h1`
  font-weight: 500;
  font-size:5rem;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: 0.5rem;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: 3px 2px 4px rgba(0,0,0, 0.4);
`;

const StyledImage = styled(Image)`
height: 100%;
width:100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

