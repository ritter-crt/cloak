import Button from "@/components/Button";
import ImageBoard from "@/components/Imageboard";
import LandingPage from "@/components/LandingPage";
import Login from "@/components/Login";
// import LoginForm from "@/components/LoginForm";

export default function Start() {
  return (
    <>
      <LandingPage />
      <ImageBoard />
      <Login></Login>
    </>
  );
}
