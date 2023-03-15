import ImageBoard from "@/components/Imageboard";
import LandingPage from "@/components/LandingPage";
import Login from "@/components/GoogleLogin";


export default function Start() {
  return (
    <>
      <LandingPage />
      <ImageBoard />
      <Login></Login>
    </>
  );
}
