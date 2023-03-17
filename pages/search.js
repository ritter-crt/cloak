import FilterFeat from "@/components/Filter";
import Search from "@/components/Search";
import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
import styled from "styled-components";

export default function SearchPage({ items }) {
  return (
    <>
      <h3>Not styled, but search is working</h3>
      <Search items={items}></Search>
      {/* <SearchWrapper>
      <FilterFeat></FilterFeat>
      </SearchWrapper> */}
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

// const SearchWrapper = styled.div`
//   background-color: pink;
//   bottom: 0;
//   padding: 90px;
// `;
