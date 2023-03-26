import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";

import Navigation from "@/components/Navigation";
import ItemList from "@/components/ItemList";
import {
  ContentWrapper,
  HeaderWrapper,
  StyledHeader,
} from "@/components/styled";
import styled from "styled-components";

export default function Home({ items }) {
  return (
    <>
      <ContentWrapper>
        <StyledHeader>newly added</StyledHeader>
        <ItemList items={items}></ItemList>
      </ContentWrapper>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  try {
    const items = await Item.find();
    // console.log(items);
    return {
      props: {
        items: JSON.parse(JSON.stringify(items)),
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
