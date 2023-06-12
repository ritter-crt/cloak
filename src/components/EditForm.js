import { useRouter } from 'next/router';

import { categoryArray, difficultyArray } from '../data';

import { Button } from './ui/Button.styles';
import { CancelButton } from './ui/Icon.styles';
import { FormWrapper, StyledForm } from './Form/Form.styles';

export default function EditForm({ onSubmit, onChange, onSelect, itemDetail }) {
  const router = useRouter();

  const { title, description, instructions, difficulty, price, category } =
    itemDetail;

  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="title"> edit title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={title}
          onChange={onChange}
        ></input>
        <label htmlFor="description"> edit description</label>
        <input
          id="description"
          name="description"
          placeholder="e.g occasion, season"
          defaultValue={description}
          onChange={onChange}
        ></input>
        <label htmlFor="category">edit category</label>
        <select
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
        </select>
        <label htmlFor="difficulty">Edit difficulty level</label>
        <select
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
        </select>
        <label htmlFor="instructions">Edit Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="5"
          placeholder="e.g preferred fabric, what you need"
          defaultValue={instructions}
          onChange={onChange}
        ></textarea>
        <label htmlFor="price">edit price</label>
        <input
          id="price"
          name="price"
          type="number"
          defaultValue={price}
          onChange={onChange}
        ></input>
        <Button width>safe changes</Button>
        <CancelButton
          onClick={() => {
            router.back();
          }}
        ></CancelButton>
      </StyledForm>
    </FormWrapper>
  );
}
