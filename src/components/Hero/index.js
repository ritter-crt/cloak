import BackgroundImage from '@/src/assets/sewer-with-mannequin.jpg';
import {
  GetStarted,
  StyledHeader,
  StyledImage,
  StyledText,
  StyledWrapper,
} from './Hero.styles';

export default function Hero() {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>cloak</StyledHeader>
        <GetStarted href="/login">get started</GetStarted>
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
