import { StyledButton } from "@/components/Button";
import Collage from "@/components/Collage";
import Hero from "@/components/Hero";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Start() {
  return (
    <>
      <Hero />
      <Collage />

      {/* <Link href="/home">
        <StyledButton>get started</StyledButton>
      </Link> */}
    </>
  );
}
