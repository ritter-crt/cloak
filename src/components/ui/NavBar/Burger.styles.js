import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
`;

export const StyledBurger = styled.div`
  width: 1.5rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 769px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.06rem;
    background-color: ${({ open }) => (open ? '#2874fc' : 'black')};
    border-radius: 10px;
    transform-origin: 0.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      /* transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')}; */
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
