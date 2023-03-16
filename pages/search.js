import { CardWrapper, StyledCard, StyledImage } from "@/components/Card";
import Item from "@/db/models/Item";
import Searchbar from "@/components/Searchbar";
import dbConnect from "@/db/connect";
import { useState } from "react";

export default function Search({ items }) {
  const [search, setSearch] = useState("");
  const keys = ["title", "category", "difficulty"];

  const searchItems = (items) => {
    return items.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };
  console.log(search);

  return (
    <>
      <h3>Not styled, but search is working</h3>
      <Searchbar setSearch={setSearch} items={items}></Searchbar>
      <CardWrapper>
        {searchItems(items).length === 0 ? (
          <div>We are very sorry! No items found</div>
        ) : (
          searchItems(items).map((item) => (
            <StyledCard key={item._id}>
              <div>{item.title}</div>
              <div>{item.price} €</div>
              <div>Difficulty: {item.difficulty}</div>
              <div>{item.category}</div>
              <StyledImage
                src={item.image}
                height={100}
                width={100}
                alt={item.title}
              />
            </StyledCard>
          ))
        )}
      </CardWrapper>
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
  