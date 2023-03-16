import ImageBoard from "@/components/Collage";
import LandingPage from "@/components/LandingPage";
import LoginForm from "@/components/LoginForm";
import Login from "@/components/GoogleLogin";

export default function Start() {
  return (
    <>
      <LandingPage />
      <ImageBoard />
      <LoginForm>get started</LoginForm>
    </>
  );
}
