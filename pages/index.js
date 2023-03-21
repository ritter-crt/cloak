import ImageBoard from "@/components/Collage";
import Hero from "@/components/Hero";

import Link from "next/link";

export default function Start() {
  return (
    <>
      <Hero />
      <ImageBoard />
      <Link href="/login">get started</Link>
    </>
  );
}
