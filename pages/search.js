import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
import {
  ContentWrapper,
  HeaderWrapper,
  StyledHeader,
} from "@/components/styled";

import Navigation from "@/components/Navigation";
import FilterItem from "@/components/FilterItem";
import NavBar from "@/components/NavBar";

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
