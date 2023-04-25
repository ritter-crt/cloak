import { device } from '@/src/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30vh;
  background-color: black;
`;

export const ScrollContainer = styled.div`
  margin-top: 20%;
  overflow: hidden;
  background-color: black;
  bottom: 0;
  height: 50px;
  width: 100%;
  @media ${device.mobileL} {
    height: 80px;
  }
`;

export const ScrollText = styled.div`
  font-family: 'Golos Text', sans-serif;
  margin-top: 20px;
  color: white;
  font-size: 12pt;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  text-align: right;
  -moz-transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  @media ${device.mobileL} {
    font-size: 20pt;
    letter-spacing: 1.5rem;
  }

  -moz-animation: my-animation 80s linear infinite;
  -webkit-animation: my-animation 80s linear infinite;
  animation: my-animation 80s linear infinite;

  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateX(-100%);
    }
    to {
      -webkit-transform: translateX(100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    to {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 8%;
  width: 100%;
  height: 150px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  @media ${device.mobileL} {
    height: 270px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  float: right;

  li {
    color: white;
    padding: 5px;
    font-size: 13pt;
    font-weight: 100;
    font-size: 8pt;
    @media ${device.mobileL} {
      font-size: 12pt;
    }
  }
`;

export const Contact = styled.div``;

export const SayHi = styled.div`
  color: white;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 10pt;
  font-weight: 400;
  @media ${device.mobileL} {
    font-size: 20pt;
  }
`;

export const Email = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 7pt;
  font-weight: 100;
  @media ${device.mobileL} {
    font-size: 10pt;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  border-top: 1px solid white;
  p {
    color: white;
    padding-right: 5%;
    float: right;
    font-size: 8pt;
    font-weight: 100;
  }
`;
