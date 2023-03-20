import Card from "@/components/NewAdd";
import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";
import Navigation from "@/components/Navigation";
import NewCard from "@/components/NewAdd";

export default function Home({ items }) {
  return (
    <>
      <NewCard items={items}></NewCard>
      <Navigation></Navigation>
    </>
  );
}

// getServerSideProps need to be on the same level as component!!! Outside of the function and inside the component
// use fetch is not needed in this case

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
