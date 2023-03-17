import ImageBoard from "@/components/Collage";
import LandingPage from "@/components/LandingPage";
import LoginForm from "@/components/LoginForm";

export default function Start() {
  return (
    <>
      <LandingPage />
      <ImageBoard />
      <LoginForm>get started</LoginForm>
    </>
  );
}
