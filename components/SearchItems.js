import { useState } from "react";
import { CardWrapper, StyledCard, StyledImage } from "./NewAdd";
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
        {filteredItems.length === 0 ? (
          <div>No ie</div>
        ) : (
          filteredItems.map((item) => (
            <StyledCard key={item._id}>
              <div>{item.title}</div>
              <div>{item.price} €</div>
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
        )}
      </CardWrapper>
    </>
  );
}
