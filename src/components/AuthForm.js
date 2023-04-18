import { ThreeDots, Triangle } from 'react-loader-spinner';

import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { StyledLabel } from './StyledForm';

import styled from 'styled-components';
import { StyledForm, StyledInput, Wrapper } from './Form.styles';
import { ContentWrapper } from './Text.styles';
import { ButtonWrapper, LoginButton } from './Button.styles';

async function createUser(name, email, password) {
  const response = await fetch('api/auth/signin', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

export default function AuthForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
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
      const result = await signIn('credentials', {
        redirect: false,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        setTimeout(() => {
          router.replace('/home');
          setIsButtonLoading(false);
        }, 2000);
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
    <ContentWrapper margin>
      <Wrapper>
        <StyledHeader>{isLogin ? 'Login' : 'Sign Up'}</StyledHeader>
        <StyledForm onSubmit={submitHandler}>
          <StyledLabel htmlFor="name" name="name" id="name">
            Your name
          </StyledLabel>
          <StyledInput
            radiusRight
            radiusLeft
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
          <StyledInput
            radiusRight
            radiusLeft
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
          <StyledLabel htmlFor="password" name="password" id="password">
            Your Password
          </StyledLabel>
          <StyledInput
            radiusRight
            radiusLeft
            type="password"
            name="password"
            aria-label="Enter your password"
            placeholder="*********"
            required
            ref={passwordInputRef}
          />

          <ButtonWrapper>
            {!isButtonLoading ? (
              <>
                <LoginButton>
                  {isLogin ? 'Login' : 'Create Account'}
                </LoginButton>
                <LoginButton type="button" onClick={switchAuthModeHandler}>
                  {isLogin
                    ? 'Create new account'
                    : 'Login with existing account'}
                </LoginButton>
              </>
            ) : (
              <ThreeDots
                height="50"
                width="50"
                color="#2874FC"
                visible={true}
              />
            )}
          </ButtonWrapper>
        </StyledForm>
      </Wrapper>
    </ContentWrapper>
  );
}

const StyledHeader = styled.h2`
  font-size: 14pt;
  padding-top: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
`;
