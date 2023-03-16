import Card from "@/components/Card";
import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";
import Searchbar from "@/components/Searchbar";
import { useState } from "react";

export default function HomePage({ items }) {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div>
        <Searchbar setSearch={setSearch} items={items}></Searchbar>
      <div>not styled yet, but search is working!</div>
        <Card items={items} search={search}></Card>
      </div>
    </>
  );
}

// getServerSideProps need to be on the same level as component!!! Outside of the function and inside the component
// use fetch is not needed in this case

export async function getServerSideProps() {
  await dbConnect();

  try {
    const items = await Item.find();
    // console.log(places);
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
