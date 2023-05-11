import styled, { css } from 'styled-components';

import {
  RiDeleteBin7Line,
  RiEditBoxLine,
  RiArrowGoBackFill,
} from 'react-icons/ri';

import { MdOutlineCancelPresentation } from 'react-icons/md';

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
`;

const stylesIcon = css`
  width: 30px;
  height: 30px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;

export const CancelButton = styled(MdOutlineCancelPresentation)`
  ${stylesIcon}
`;

export const DeleteIcon = styled(RiDeleteBin7Line)`
  ${stylesIcon}
`;

export const EditIcon = styled(RiEditBoxLine)`
  ${stylesIcon}
`;

export const BackIcon = styled(RiArrowGoBackFill)`
  ${stylesIcon}
`;
