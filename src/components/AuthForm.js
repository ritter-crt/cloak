import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { StyledForm } from './Form/Form.styles';
import { ButtonWrapper, LoginButton } from './ui/Button.styles';
import { ContentWrapper } from './ui/Wrapper.styles';
import { HeaderText } from './ui/Header/Header.styles';

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
      <div>
        <HeaderText
          fontSize="14pt"
          bottom="2rem"
          fontFamily="true"
          align="true"
        >
          Login
        </HeaderText>
        <StyledForm onSubmit={submitHandler}>
          <label htmlFor="name" name="name" id="name">
            Your name
          </label>
          <input
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
          <label htmlFor="email" name="email" id="email">
            Your Email
          </label>
          <input
            radiusRight
            radiusLeft
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
          <label htmlFor="password" name="password" id="password">
            Your Password
          </label>
          <input
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
            <>
              <LoginButton>{isLogin ? 'Login' : 'Create Account'}</LoginButton>
              <LoginButton type="button" onClick={switchAuthModeHandler}>
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </LoginButton>
            </>
          </ButtonWrapper>
        </StyledForm>
      </div>
    </ContentWrapper>
  );
}
