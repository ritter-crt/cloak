import { useState } from 'react';

import RightNav from './RightNavBar';
import { StyledBurger, Wrapper } from './Burger.styles';

export default function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </Wrapper>
  );
}
