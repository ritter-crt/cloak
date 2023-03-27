import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";
import ItemList from "@/src/components/ItemList";
import { ContentWrapper, StyledHeader } from "@/src/components/styled";
import NavBar from "@/src/components/NavBar";

export default function Home({ items }) {
  return (
    <>
      <NavBar></NavBar>
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
