import styled from 'styled-components';
import Image from 'next/image';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 150px;
  height: 250px;
  margin-bottom: 1rem;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const Title = styled.p`
  text-transform: uppercase;
  height: 12%;
  font-size: 9pt;
  font-weight: 250;
  margin: 0.5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0.5rem;
`;
export const Text = styled.p`
  font-size: 10pt;
  font-weight: 350;
`;
