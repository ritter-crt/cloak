import { useRouter } from 'next/router';

import { categoryArray, difficultyArray } from '../utils';

import { Button, CancelButton } from './common/Button.styles';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from './common/Form.styles';

export default function EditForm({ onSubmit, onChange, onSelect, itemDetail }) {
  const router = useRouter();

  const { title, description, category, difficulty, instructions, price } =
    itemDetail;

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel htmlFor="title"> edit title</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          type="text"
          defaultValue={title}
          onChange={onChange}
        ></StyledInput>
        <StyledLabel htmlFor="description"> edit description</StyledLabel>
        <StyledInput
          id="description"
          name="description"
          placeholder="e.g occasion, season"
          defaultValue={description}
          onChange={onChange}
        ></StyledInput>
        <StyledLabel htmlFor="category">edit category</StyledLabel>
        <StyledSelect
          name="category"
          id="category"
          defaultValue={category}
          onSelect={onChange}
        >
          {categoryArray &&
            categoryArray.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </StyledSelect>
        <StyledLabel htmlFor="difficulty">Edit difficulty level</StyledLabel>
        <StyledSelect
          name="difficulty"
          id="difficulty"
          defaultValue={difficulty}
          onSelect={onSelect}
        >
          {difficultyArray &&
            difficultyArray.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
        </StyledSelect>
        <StyledLabel htmlFor="instructions">Edit Instructions</StyledLabel>
        <StyledTextarea
          id="instructions"
          name="instructions"
          rows="5"
          placeholder="e.g preferred fabric, what you need"
          defaultValue={instructions}
          onChange={onChange}
        ></StyledTextarea>
        <StyledLabel htmlFor="price">edit price</StyledLabel>
        <StyledInput
          id="price"
          name="price"
          type="number"
          defaultValue={price}
          onChange={onChange}
        ></StyledInput>
        <Button width>safe changes</Button>
        <CancelButton
          onClick={() => {
            router.back();
          }}
        ></CancelButton>
      </StyledForm>
    </>
  );
}
