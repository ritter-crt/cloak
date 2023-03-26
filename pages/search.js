import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
import { HeaderWrapper, StyledHeader } from "@/components/styled";

import Navigation from "@/components/Navigation";
import FilterItem from "@/components/FilterItem";

export default function Search({ items }) {
  return (
    <>
      <HeaderWrapper>
        <StyledHeader>Search</StyledHeader>
      </HeaderWrapper>
      <FilterItem items={items}></FilterItem>
      <Navigation />
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
