import styled from 'styled-components';
import css from 'styled-jsx/css';

import { TfiClose, TfiCheck } from 'react-icons/tfi';

export const ModalContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0.35, 0.2) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Title = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const ModalButton = styled.button`
  margin-top: 40px;
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: var(--background-color);
  font-size: 10pt;
  &:hover {
    color: var(--first-color);
  }
`;

export const stylesIcon = css`
  width: 15px;
  height: 15px;
  color: black;
  margin: 10px;
`;
export const YesIcon = styled(TfiCheck)`
  ${stylesIcon}
`;

export const NoIcon = styled(TfiClose)`
  ${stylesIcon}
`;
