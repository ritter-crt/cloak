import NavBar from "@/components/NavBar";
import { device } from "@/styles";
import { getSession } from "next-auth/react";
import styled from "styled-components";
import User from "./users/[id]";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <User></User>
      </ContentWrapper>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }

const ContentWrapper = styled.div`
  margin-top: 100px;
  margin-left: 7%;
  margin-right: 7%;
  margin-bottom: 20%;
  @media ${device.mobileL} {
    margin-left: 10%;
    margin-right: 10%;
  }
`;
