import styled from "styled-components";

export default function Searchbar() {
  return (
    <>
      <StyledBox class="box">
        <form name="search">
          <StyledInput
            type="text"
            className="input"
            name="txt"
            onmouseout="this.value = ''; this.blur();"
            placeholder="  🔎 Search..."
          ></StyledInput>
        </form>
        <StyledI className="fas fa-search"></StyledI>
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 2px;
  width: 10%;
  height: 50px;
  background: none;
  border: 3px solid black;
  border-radius: 25px;
  box-sizing: border-box;
  color: #ffd52d;
  outline: none;
  transition: 0.5s;
  &:hover {
    width: 350px;
    background: rgb(245, 245, 245)
    border-radius:10px;
  }
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
