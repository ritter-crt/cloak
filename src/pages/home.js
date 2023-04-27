import NavBar from '../components/common/NavBar/NavBar';
import ItemList from '../components/ItemList';
import Item from '@/db/models/Item';
import dbConnect from '@/db/connect';
import { Header } from '../components/common/Text.styles';

import { ContentWrapper } from '../components/common/Wrapper.styles';

export default function Home({ items }) {
  return (
    <>
      <title>newly added</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <Header>newly added</Header>
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
