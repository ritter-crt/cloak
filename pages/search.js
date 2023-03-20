import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
import styled from "styled-components";

import SearchItems from "@/components/SearchItems";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";

export default function Search({ items }) {
  return (
    <>
      <SearchItems items={items}></SearchItems>
      <Filter></Filter>
      <Navigation/>
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
