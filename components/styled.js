import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
object-fit:cover;
`

export const StyledTitle = styled.p`
text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top:6px;
  margin-bottom:4px
`;
