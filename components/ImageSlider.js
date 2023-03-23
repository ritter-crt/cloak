// import Image from "next/image";
// import { useState } from "react";
// import styled from "styled-components";


// export default function ImageSlider({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const 

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide
//       ? images.length - 1
//       : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   return (
//     <>
//       <h2>Imageslider</h2>
//       <Slider>
      
//         <Slide img={images}>
//           <LeftArrow onClick={goToPrevious}>◀</LeftArrow>
//           <RightArrow>▶︎</RightArrow>
//           {/* {images.map((image) => (
//           <Image
//             src={image}
//             width="500"
//             height="500"
//             alt="an image is being displayed here"
//           />
//         ))} */}
//         </Slide>
//       </Slider>
//     </>
//   );
// }

// const Slide = styled.div`
//   width: 100%;
//   height: 100%;

//   background-position: center;
//   background-size: cover;
//   background-image: url(${images => images.img});

//   //must be replaces by image
// `;

// const Slider = styled.div`
//   height: 100%;
//   border-radius: 10px;
//   position: relative;
// `;

// const LeftArrow = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translate(0, -50%);
//   left: 2%;
//   font-size: 12pt;
//   color: black;
// `;
// const RightArrow = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translate(0, -50%);
//   right: 2%;
//   font-size: 12pt;
//   color: black;
// `;
