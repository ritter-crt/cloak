import ImageBoard from "@/components/Imageboard";
import LandingPage from "@/components/LandingPage";
import LoginForm from "@/components/LoginForm";
import Login from "@/components/GoogleLogin";


export default function Start() {
  return (
    <>
      <LandingPage />
      <ImageBoard />
      <Login></Login>
      <LoginForm>get started</LoginForm>
    </>
  );
}
