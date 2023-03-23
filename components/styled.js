import { device } from "@/styles";

import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
export const StyledLabel = styled.label`
  margin-top: 20px;
  padding-bottom: 10px;

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

export const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top: 6px;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid black;
  padding: 5px 10px;
  outline: none;
  @media ${device.mobileL} {
    padding-top: 1px;
  }
`;
