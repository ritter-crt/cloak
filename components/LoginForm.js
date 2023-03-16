import { device } from "@/styles";

import styled from "styled-components";

import Button from "./Button";
import GoogleLogin from "./GoogleLogin";

export default function LoginForm() {
    
  return (
    <EntryForm>
      <StyledParagraph>calling all sewing lovers</StyledParagraph>
      <StyledHeader>We invite you to join cloak.</StyledHeader>
      <StyledLabel htmlFor="email" name="email" id="email">
        email
      </StyledLabel>
      <StyledInput
        type="email"
        name="email"
        autoComplete="off"
        aria-label="Enter text"
        placeholder="this is not working (yet)"
      />
      <StyledLabel htmlFor="password" name="password" id="password">
        password
      </StyledLabel>
      <StyledInput
        type="password"
        name="password"
        aria-label="Enter your name"
      />
      <Button>get started</Button>
      <GoogleLogin></GoogleLogin>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 3rem 5rem 3rem;
  @media ${device.mobileL} {
    width: 50%;
    float:right;

  }
`;

export const StyledHeader = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 14pt;
  @media ${device.mobileL} {
    font-size: 15pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 0px;
  }
`;


const StyledParagraph = styled.p`
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 11pt;
  text-transform: uppercase;
  @media ${device.mobileL} {
    font-size:13pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 0px;
    padding-top: 4rem;
  }
`;
const StyledLabel = styled.label`
  padding-top: 8px;
  padding-bottom: 10px;
  margin-top: 5px;
  font-size: 9pt;
  text-transform: uppercase;
  @media ${device.mobileL} {
    font-size: 11pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 2px;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid black;
  padding: 5px 10px;
  outline: none;
  @media ${device.mobileL} {
    padding-top: 1px;
  }
`;
