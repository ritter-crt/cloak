import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthForm from "@/components/AuthForm";

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
    return (
      <>
        {/* <LoadingWrapper> */}
        <h3>Loading</h3>
        {/* <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper> */}
      </>
    );
  }

  return <AuthForm />;
}

// export const LoadingWrapper = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   padding: 20px 10px 50px 10px;
// `;

// export const Dot = styled.div`
//   background-color: black;
//   border-radius: 50%;
//   width: 0.75rem;
//   height: 0.75rem;
//   margin: 0 0.25rem;
//   /*Animation*/
//   animation: ${BounceAnimatio} 0.5s linear infinite;
//   animation-delay: ${(props) => props.delay};
// `;

// export const BounceAnimation = keyframes`
//   0% {
//     margin-bottom: 0;
//   }

//   50% {
//     margin-bottom: 1rem;
//   }

//   100% {
//     margin-bottom: 10rem;
//   }
// `;
