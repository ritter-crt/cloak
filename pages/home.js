import dbConnect from "@/db/connect";
import ItemList from "@/components/ItemList";
import { ContentWrapper, StyledHeader } from "@/components/styled";
import NavBar from "@/components/NavBar";
import Item from "@/db/models/Item";

export default function Home({ items }) {
  return (
    <>
      <title>Newly Added</title>
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
