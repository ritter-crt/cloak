import Image from "next/image";
import styled from "styled-components";
import HandWorking from "../src/assets/hand-working.jpg";
import TailorWorking from "../src/assets/tailor-working.jpg";
import ClothingPile from "../src/assets/pile-of-clothes.jpeg";

export default function ImageBoard() {
  return (
    <>
      <StyledImageOne src={HandWorking} height={273} width={300} />
      <StyledImageTwo src={TailorWorking} height={250} width={150} />
      <StyledImageThree src={ClothingPile} height={400} width={400} />
      <StyledText>CLOAK is a plattform dedicated to exchange, sell and get sewing patterns.</StyledText>
    </>
  );
}

const StyledImageOne = styled(Image)`
  object-fit: contain;
  margin-left: 1rem;
`;

const StyledImageTwo = styled(Image)`
  object-fit: contain;
  float: right;
  margin-right: 1rem;
`;

const StyledImageThree = styled(Image)`
  object-fit: contain;
  width: 90%;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const StyledText = styled.div`
  padding: 10%;
  font-weight:100;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  font-size: 14pt;
  margin-right: 10%;
  `

// const StyledImageBoard = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr 1fr;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//   gap: 1px;
//   height: 100%;
// `;

// const StyledImageOne = styled(Image)`
//   grid-row-start: 3;
//    grid-column-start: 1;
//    grid-row-end: 5;
//    grid-column-end: 3;
//    object-fit: contain
// `;

// const StyledImageTwo = styled(Image)`
//   grid-row-start: 6;
//   grid-column-start: 1;
//   grid-row-end: 9;
//   grid-column-end: 6;
//   object-fit: contain
// `;

// const StyledImageTwo = styled(Image)`
//   object-fit: contain;
// `;
