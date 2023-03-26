import { device } from "@/styles";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "./Button";
import Login from "./Logout";
import { StyledLabel } from "./styled";

export default function LoginForm() {
  return (
    <EntryForm>
      <StyledParagraph>Calling all Sewing Lovers</StyledParagraph>
      <StyledHeader>We invite you to join cloak.</StyledHeader>
      <StyledLabel htmlFor="name" name="name" id="name">
        name
      </StyledLabel>
      <StyledInput
        type="name"
        name="name"
        autoComplete="off"
        aria-label="Enter text"
        placeholder="choose a username"
      />
      <StyledLabel htmlFor="email" name="email" id="email">
        email
      </StyledLabel>
      <StyledInput
        type="email"
        name="email"
        autoComplete="off"
        aria-label="Enter your email"
        placeholder="jane@doe.com"
      />
      <StyledLabel htmlFor="password" name="password" id="password">
        password
      </StyledLabel>
      <StyledInput
        type="password"
        name="password"
        aria-label="Enter your password"
        placeholder="*********"
      />
      <Link href="/home">
        <Login>sign up</Login>
      </Link>

      <StyledLabel>Already Signed Up?</StyledLabel>
      <StyledButton>login</StyledButton>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem 5rem 3rem;
  @media ${device.mobileL} {
    width: 50%;
    float: right;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 12pt;
  margin-top: 5px;
  @media ${device.mobileL} {
    font-size: 15pt;
  }
`;

const StyledParagraph = styled.p`
  font-size: 10pt;
  font-weight: 50;
  letter-spacing: 0.05rem;
  margin: 0px;
  text-transform: uppercase;
  @media ${device.mobileL} {
    font-size: 13pt;
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
