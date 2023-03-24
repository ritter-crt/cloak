import { device } from "@/styles";

import Image from "next/image";
import styled from "styled-components";

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  margin: 10% 10% 20% 10%;
  border-radius: 20px;
  box-shadow: var(--first-color) 0px 1px 3px;
`;

export const StyledLabel = styled.label`
  margin-top: 20px;
  padding-bottom: 0px;
  font-family: "Bodoni Moda", serif;

  text-transform: uppercase;
  @media ${device.mobileL} {
    font-size: 11pt;
    letter-spacing: 0.2 rem;
    line-height: 2rem;
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 2px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px 10px;
  outline: none;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.05);
  @media ${device.mobileL} {
    padding-top: 1px;
  }
`;

export const StyledSelect = styled.select`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const StyledTextarea = styled.textarea`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
  font-family: inherit;
`;
