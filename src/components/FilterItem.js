import { categoryArray, difficultyArray } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import { StyledTitle } from "./styled";
import {
  CardWrapper,
  StyledCard,
  StyledImage,
  StyledText,
  TextWrapper,
} from "./StyledCard";

export default function FilterItem({ items }) {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState(["All"]);
  const [searchParam] = useState([
    "category",
    "difficulty",
    "title",
    "description",
  ]);

  const filteredItems =
    //______________________To start with empty page set initial state to empty array
    // query.length > 0
    //   ?
    items.filter((item) => {
      if (item.difficulty === filterParam || item.category === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              // .toString()
              .toLowerCase()
            // .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              // .toString()
              .toLowerCase()
            // .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  // like so___________________________
  // : [];

  return (
    <>
      <StyledBox>
        <StyledInput
          type="search"
          placeholder="Search for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <StyledI></StyledI>
      </StyledBox>

      <FilterWrapper>
        <DropdownWrapper>
          <p>sort by category</p>
          <Select
            defaultValue="category"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option defaultValue="all">Filter by category</option>
            {categoryArray &&
              categoryArray.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </Select>
        </DropdownWrapper>
        <DropdownWrapper>
          <p>sort by difficulty level</p>
          <Select
            defaultValue="difficulty"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option value="all">Filter by difficulty</option>
            {difficultyArray &&
              difficultyArray.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
          </Select>
        </DropdownWrapper>
      </FilterWrapper>

      <CardWrapper>
        {filteredItems.length <= 0 ? (
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
    </>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  padding-bottom: 10%;
  flex-direction: column;
  justify-content: space-between;
`;

const DropdownWrapper = styled.div`
  width: 100%;
`;
const StyledBox = styled.div``;

const StyledInput = styled.input`
  width: 50%;
  padding: 8px;
  background-color: #ffd52d;
  height: 40px;
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  &:hover {
    width: 100%;
    border: 2px solid var(--first-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const StyledI = styled.i`
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 11pt;
  color: #ffd52d;
  transition: 0.2s;
  &:hover {
    opacity: 0;
    z-index: -1;
  }
`;

const Select = styled.select`
  width: 100%;
  border: none;
  border-bottom: 2px solid black;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;
