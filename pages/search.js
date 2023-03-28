import dbConnect from "@/db/connect";

import { ContentWrapper, StyledHeader } from "@/src/components/styled";

import FilterItem from "@/src/components/FilterItem";
import NavBar from "@/src/components/NavBar";
import Item from "@/db/models/Item";

export default function Search({ items }) {
  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <StyledHeader>Search</StyledHeader>
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
