import ImageBoard from "@/components/Imageboard";
import LandingPage from "@/components/LandingPage";
import LoginForm from "@/components/LoginForm";

import styled from "styled-components";


export default function Home() {
  return (
    <>
      <LandingPage/>
      <ImageBoard/>
      <LoginForm/>
    </>
  );
}
