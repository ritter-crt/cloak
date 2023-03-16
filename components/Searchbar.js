import styled from "styled-components";
import Card from "./Card";

export default function Searchbar({ setSearch, items, search }) {
  return (
    <>
      <StyledBox>
        <StyledInput
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="txt"
          onmouseout="this.value = ''; this.blur();"
          placeholder="Search..."
        ></StyledInput>
        <StyledI></StyledI>
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  position: relative;
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
    width: 100%;
    border: 1px solid rgb(230, 230, 250);
    border-radius: 10px;
    box-shadow: rgb(230, 230, 250) 0.95px 0.95px 2.6px;
  }
  /* &:focus {
    width: 100%;
    background: 1px rgb(245, 245, 245);
    border: 1px solid yellow;
    border-radius:10px;
  } */
`;

const StyledI = styled.i`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #ffd52d;
  transition: 0.2s;
  &:hover {
    opacity: 0;
    z-index: -1;
  }
`;
