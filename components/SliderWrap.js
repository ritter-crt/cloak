import styled, { css } from "styled-components";

export const SliderWrap = styled.div`
  position: relative;
  .swiper {
    width: 100%;

    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color);
    img {
      max-width: 100%;
      height: 400px;
    }
  }
  ${({ arrows }) =>
    arrows &&
    css`
      .swiper-button {
        &-next,
        &-prev {
          top: 50%;
          z-index: 9;
          width: 40px;
          height: 40px;
          margin: auto;
          line-height: 40px;
          position: absolute;
          visibility: hidden;
          text-align: center;
          transform: translateY(-50%);
          color: #000000;
          transition: all 0.4s ease 0s;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0 3px 25.5px 4.5px var(--first-color 0.06);
          &:hover {
            color: #212121;
            background-color: var(--first-color);
          }
          &:after {
            font-size: 14px;
          }
        }
        &-prev {
          outline: 0;
          right: auto;
          left: -20px;
          &:after {
            margin-right: 3px;
          }
        }
        &-next {
          outline: 0;
          left: auto;
          right: -20px;
          &:after {
            margin-left: 3px;
          }
        }
        &-disabled {
          opacity: 0.1;
        }
      }
      &:hover {
        .swiper-button {
          &-prev,
          &-next {
            visibility: visible;
          }
          &-prev {
            left: 10px;
          }
          &-next {
            right: 10px;
          }
        }
      }
    `}
  ${({ dots }) =>
    dots &&
    css`
      .swiper-pagination {
        &-bullet {
          cursor: pointer;
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          background: #1f18c0;
          opacity: 0.2;
          border: 1px solid var(--first-color);
          margin: 0 5px;
          box-shadow: none;
          transition: all 0.4s ease 0s;
          transform: scale(0.8);
          &-hover,
          &:active {
            background-color: var(--first-color);
            border-color: var(--first-color);
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    `};
`;
