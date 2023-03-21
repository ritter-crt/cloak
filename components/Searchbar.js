import styled from "styled-components";
import Card from "./ItemList";
import { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [searchedQuery, setSearchQuery] = useState([]);

  return (
    <>
      <StyledBox>
        <StyledInput
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch(e.target.value);
          }}
          value={searchedQuery}
          type="text"
          name="txt"
          placeholder="Search..."
        ></StyledInput>
        <StyledI></StyledI>
      </StyledBox>
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
    border: 1px solid rgb(230, 230, 250);
    border-radius: 10px;
    box-shadow: rgb(230, 230, 250) 0.95px 0.95px 2.6px;
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
