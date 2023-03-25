import styled from "styled-components";
import Image from "next/image";

export const ContentWrapper = styled.div`
  margin-top: 80px;
  padding-left: 9%;
  padding-right: 9%;
  margin-bottom: 20%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledCard = styled.div`
  width: 150px;
  height: 250px;
`;

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

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledText = styled.p`
  font-size: 10pt;
  margin: 0;
`;
