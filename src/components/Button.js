import { device } from "@/styles";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: 50%;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 2px;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  padding: 10px;
  background-color: black;
  border-radius: 40px;
  border: none;
  transition-delay: 0.1s;
  font-size: 10pt;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media ${device.mobileL} {
    font-size: 11pt;
    padding: 13px;
  }
`;
