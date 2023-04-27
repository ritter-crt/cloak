import dbConnect from '@/db/connect';

import FilterItem from '@/src/components/FilterItem';
import NavBar from '@/src/components/common/NavBar/NavBar';
import Item from '@/db/models/Item';
import { ContentWrapper } from '../components/common/Wrapper.styles';
import { Header } from '../components/common/Text.styles';

export default function Search({ items }) {
  return (
    <>
      <title>Your Next Sewing Project</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <Header>Get Inspired</Header>
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
