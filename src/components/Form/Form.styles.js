import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  border-radius: 20px;
  border: 1px solid black;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-top: 20px;
    padding-bottom: 10px;
    font-family: 'Bodoni Moda', serif;
    text-transform: uppercase;
    font-size: 10pt;
  }
  input {
    border: none;
    border-bottom: 2px solid black;
    border-start-end-radius: ${({ radiusRight }) =>
      radiusRight ? '0.5rem' : 'none'};
    border-start-start-radius: ${({ radiusLeft }) =>
      radiusLeft ? '0.5rem' : 'none'};
    padding: 10px 10px;
    outline: none;

    background-color: rgba(0, 0, 0, 0.05);
    &:hover,
    &:active,
    &:focus {
      border: 2px solid var(--first-color);
    }
  }
  select {
    border: 1.5px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.05);
    outline: none;
    &:hover,
    &:active,
    &:focus {
      border: 2px solid var(--first-color);
    }
  }
  textarea {
    border: 1.5px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.05);
    font-family: inherit;
    outline: none;
    &:hover,
    &:active,
    &:focus {
      border: 2px solid var(--first-color);
    }
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  outline: none;
  padding: 5px 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  border: 1.5px solid black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  &:hover,
  &:active,
  &:focus {
    border: 2px solid var(--first-color);
  }
`;
export const TriangleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
