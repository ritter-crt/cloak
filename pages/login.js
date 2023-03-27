import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthForm from "@/src/components/AuthForm";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/home");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}
