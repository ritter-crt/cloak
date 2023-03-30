import dbConnect from "@/db/connect";

import { ContentWrapper, StyledHeader } from "@/components/styled";

import FilterItem from "@/components/FilterItem";
import NavBar from "@/components/NavBar";
import Item from "@/db/models/Item";

export default function Search({ items }) {
  return (
    <>
      <title>Search</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledHeader>Get Inspired</StyledHeader>
        <FilterItem items={items}></FilterItem>
      </ContentWrapper>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  try {
    const items = await Item.find();
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
