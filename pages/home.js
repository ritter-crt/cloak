import Card from "@/components/Card";
import Item from "@/db/models/Item";
import dbConnect from "@/db/connect";
import Searchbar from "@/components/Searchbar";
import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function HomePage({ items }) {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      {/* <Searchbar setSearch={setSearch} items={items}></Searchbar> */}
      <h1>Hello home</h1>
      <Card items={items} search={search}></Card>
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
