import styled, { css } from 'styled-components';

export const SliderWrap = styled.div`
  position: relative;
  .swiper {
    width: 100%;
    height: fit-content;
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
          transition: all 0.4s ease 0s;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0 3px 25.5px 4.5px var(--first-color 0.06);
          &:hover {
            color: white;
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
         {
          border-radius: 50%;
          transition: all 0.4s ease 0s;
          &:active {
            background-color: var(--first-color);
            opacity: 1;
          }
        }
      }
    `};
`;
