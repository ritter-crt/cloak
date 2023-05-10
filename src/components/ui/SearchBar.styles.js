import styled from 'styled-components';

export const SearchBar = styled.input`
  width: 50%;
  padding: 8px;
  background-color: #ffd52d;
  height: 40px;
  background: none;
  border: 1.5px solid black;
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
