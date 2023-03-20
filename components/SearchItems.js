import { useState } from "react";
import { CardWrapper, StyledCard, StyledImage } from "./NewCard";
import Searchbar from "./Searchbar";
import { useRouter } from "next/router";

export default function SearchItems({ items }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const keys = ["title", "category", "difficulty"];
  const router = useRouter();
  return (
    <>
      <Searchbar
        items={items}
        onSearch={(value) => {
          setFilteredItems(
            items.filter((item) =>
              keys.some((key) => item[key].toLowerCase().includes(value))
            )
          );
        }}
      ></Searchbar>
      <CardWrapper>
        {filteredItems.length !== 0 ? (
          filteredItems.map((item) => (
            <StyledCard key={item._id}>
              <div>{item.title}</div>
              <div>{item.price}€</div>
              <div>{item.difficulty}</div>
              <div>{item.category}</div>
              <StyledImage
                onClick={() => router.push(`/item-page/${item._id}`)}
                src={item.image}
                height={100}
                width={100}
                alt={item.title}
              />
            </StyledCard>
          ))
        ) : (
          <div> We are sorry! No items found!</div>
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
