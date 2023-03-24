import Card from "@/components/ItemList";
import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";
import Navigation from "@/components/Navigation";
import ItemList from "@/components/ItemList";
import styled from "styled-components";
import { HeaderWrapper, StyledHeader } from "@/components/styled";
import Searchbar from "@/components/Searchbar";
import SearchItems from "@/components/SearchItems";
import NewSearch from "@/components/NewSeach";

export default function Home({ items }) {
  return (
    <>
      <HeaderWrapper>
        <StyledHeader>newly added</StyledHeader>
      </HeaderWrapper>
      {/* <SearchItems items={items}></SearchItems> */}
      <NewSearch items={items}></NewSearch>
      <ItemList items={items}></ItemList>
      <Navigation></Navigation>
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
