import { useState } from "react";
import styled from "styled-components";

import { StyledHeader, StyledTitle } from "./styled";
import {
  CardWrapper,
  ContentWrapper,
  StyledCard,
  StyledImage,
  StyledText,
  TextWrapper,
} from "./StyledCard";
import { StyledSelect } from "./StyledForm";

const categoryArray = [
  "tops",
  "bottom",
  "onsies",
  "dresses",
  "jackets",
  "coats",
  "accessories",
];

const difficultyArray = [
  "beginner",
  "easy",
  "intermediate",
  "medium",
  "expert",
];

const pricesArray = [
  {
    name: "free",
    value: "0",
  },
  {
    name: "1-10€",
    value: "1-10",
  },
  {
    name: "10-20€",
    value: "10-20",
  },
  {
    name: "20-50€",
    value: "20-50",
  },
  {
    name: "50-99€",
    value: "50-99",
  },
];

export default function FilterItem({ items }) {
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState(["All"]);
  const [searchParam] = useState(["category", "difficulty", "price", "title"]);

  const filteredItems =
    //______________________To start with empty page set initial state to empty array
    // query.length > 0
    //   ?
    items.filter((item) => {
      if (item.difficulty === filterParam || item.category === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  // like so___________________________
  // : [];

  return (
    <>
      <ContentWrapper>
        <StyledBox>
          <StyledInput
            type="search"
            placeholder="Search for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <StyledI></StyledI>
        </StyledBox>

        <div>
          <h1>categories</h1>
          <form>
            <StyledSelect
              value="category"
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
            >
              <option value="all">all</option>
              {categoryArray &&
                categoryArray.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </StyledSelect>
            <h2>difficulty level</h2>
            <StyledSelect className="w-full" value="difficulty">
              <option value="all">all</option>
              {difficultyArray &&
                difficultyArray.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
            </StyledSelect>
            {/* <h2>Prices</h2>
          <select className="w-full" value="price">
            <option value="all">all</option>
            {pricesArray &&
              pricesArray.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.name}
                </option>
              ))}
          </select> */}
          </form>
        </div>

        <CardWrapper>
          {filteredItems.length <= 1 ? (
            <div>No items found</div>
          ) : (
            filteredItems.map((item) => (
              <StyledCard key={item._id}>
                <StyledImage
                  onClick={() => router.push(`/item-page/${item._id}`)}
                  src={item.images[0]}
                  height="150"
                  width="150"
                  alt={item.description}
                />
                <StyledTitle>{item.title}</StyledTitle>
                <TextWrapper>
                  <StyledText>{item.difficulty}</StyledText>
                  <StyledText>{item.price} €</StyledText>
                </TextWrapper>
              </StyledCard>
            ))
          )}
        </CardWrapper>
      </ContentWrapper>
    </>
  );
}

const StyledBox = styled.div`
  margin-top: 50px;
`;

const StyledInput = styled.input`
  margin: 20px;
  padding: 10px;
  width: 20%;
  height: 40px;
  background: none;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  &:hover {
    width: 90%;
    border: 1px solid var(--first-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const StyledI = styled.i`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(-50%, -50%);
  font-size: 11pt;
  color: #ffd52d;
  transition: 0.2s;
  &:hover {
    opacity: 0;
    z-index: -1;
  }
`;
