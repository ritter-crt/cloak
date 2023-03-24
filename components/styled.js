import { device } from "@/styles";

import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top: 6px;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px 10px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.05);

  @media ${device.mobileL} {
    padding-top: 1px;
  }
`;

export const StyledHeader = styled.h1`
  margin-left: 10%;
  margin-right: 10%;
  font-size: 20pt;
  font-family: "Bodoni Moda", serif;
  font-weight: 100;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 20px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: solid 0.1px;
`;
