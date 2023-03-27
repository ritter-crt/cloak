import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { StyledLabel } from "./StyledForm";

import styled from "styled-components";

async function createUser(name, email, password) {
  const response = await fetch("api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

export default function AuthForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        router.replace("/home");
      } else {
        try {
          const result = await createUser(
            enteredName,
            enteredEmail,
            enteredPassword
          );
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  return (
    <Wrapper>
      <StyledHeader>{isLogin ? "Login" : "Sign Up"}</StyledHeader>
      <EntryForm onSubmit={submitHandler}>
        <StyledLabel htmlFor="name" name="name" id="name">
          Your name
        </StyledLabel>
        <StyledInput
          type="name"
          name="name"
          autoComplete="off"
          aria-label="Enter text"
          placeholder="your name"
          required
          ref={nameInputRef}
        />
        <StyledLabel htmlFor="email" name="email" id="email">
          Your Email
        </StyledLabel>
        <StyledInput type="email" id="email" required ref={emailInputRef} />
        <StyledLabel htmlFor="password" name="password" id="password">
          Your Password
        </StyledLabel>
        <StyledInput
          type="password"
          name="password"
          aria-label="Enter your password"
          placeholder="*********"
          required
          ref={passwordInputRef}
        />
        <ButtonWrapper>
          <Button>{isLogin ? "Login" : "Create Account"}</Button>
          <Button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </ButtonWrapper>
      </EntryForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10%;
  border-radius: 20px;
  border: 1px solid black;
`;

const EntryForm = styled.form`
  padding: 10%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  font-size: 14pt;
  padding-top: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid black;
  padding: 5px 10px;
  outline: none;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: var(--first-color);
  &:hover {
    color: black;
    font-size: 12pt;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
