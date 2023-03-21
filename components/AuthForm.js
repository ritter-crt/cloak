import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

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
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Your name</label>
          <input type="name" id="name" required ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
