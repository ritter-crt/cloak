import Login from "@/src/components/Login";
import NavBar from "@/src/components/NavBar";
import { ContentWrapper, StyledHeader } from "@/src/components/styled";
import { getSession } from "next-auth/react";
import styled from "styled-components";
import User from "./users/[id]";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledDiv></StyledDiv>
        <StyledHeader>Profile</StyledHeader>
        <User></User>
        {/* <Login></Login> */}
      </ContentWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const StyledDiv = styled.div`
  height: 500px;
`;
