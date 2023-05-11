import {
  Contact,
  Container,
  Copyright,
  Email,
  SayHi,
  ScrollContainer,
  ScrollText,
  Ul,
  Wrapper,
} from './Footer.styles';

export default function Footer() {
  return (
    <Wrapper>
      <ScrollContainer>
        <ScrollText>fashion + exchange + sell + design </ScrollText>
      </ScrollContainer>
      <Container>
        <Contact>
          <SayHi>Get in Touch!</SayHi>
          <Email>hello.something@spesomething.com</Email>
        </Contact>
        <Ul>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </Ul>
      </Container>
      <Copyright>
        <p>@2023 my capstone project</p>
      </Copyright>
    </Wrapper>
  );
}
