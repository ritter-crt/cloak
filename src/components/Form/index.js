import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import useSWR from 'swr';

import { Oval } from 'react-loader-spinner';

import UploadImage from '../UploadImage';
import UploadPattern from '../UploadPattern';
import { Text } from '../ui/Text.styles';
import { Button } from '../ui/Button.styles';

import { categoryArray, difficultyArray } from '@/src/data';
import { StyledForm, TriangleContainer, FormWrapper } from './Form.styles';

export default function Form({}) {
  const { data: session } = useSession();

  const [imageSrc, setImageSrc] = useState([]);
  const [patternSrc, setPatternSrc] = useState();

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [inputText, setInputText] = useState('');
  const [characterLimit] = useState(300);
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const router = useRouter();
  const items = useSWR('/api/items/create');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsButtonLoading(true);
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.createdAt = new Date().getTime();
    newItem.images = imageSrc;
    newItem.pattern = patternSrc;
    newItem.userId = session.user.email;
    // console.log(newItem);

    const response = await fetch('/api/items/create', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      await response.json();
      items.mutate();
      event.target.reset();
      setTimeout(() => {
        router.push('/home');
        setIsButtonLoading(false);
      }, 2000);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <FormWrapper>
      <UploadImage imageSrc={imageSrc} setImageSrc={setImageSrc}></UploadImage>
      <UploadPattern
        patternSrc={patternSrc}
        setPatternSrc={setPatternSrc}
      ></UploadPattern>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          placeholder="e.g long trouses"
          maxLength="25"
          // required
        ></input>
        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          placeholder="e.g occasion, season"
          maxLength="50"
          // required
        ></input>
        <label htmlFor="category">select a category</label>
        <select name="category" id="category">
          {categoryArray &&
            categoryArray.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

        <label htmlFor="difficulty">select a difficulty level</label>
        <select name="difficulty" id="difficulty">
          {difficultyArray &&
            difficultyArray.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
        </select>
        <label htmlFor="instructions">provide some instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="5"
          maxLength="300"
          value={inputText}
          onChange={handleChange}
          isInvalid={inputText.length > characterLimit}
          // required
        ></textarea>
        <Text>
          {inputText.length}/{characterLimit}
        </Text>
        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          type="number"
          defaultValue="€"
          min="1"
          max="99"
        ></input>
        <TriangleContainer>
          {!isButtonLoading ? (
            <Button>upload your pattern</Button>
          ) : (
            <Oval
              height="50"
              width="50"
              color="#2874FC"
              secondaryColor="#a9c7fd"
              visible={true}
            />
          )}
        </TriangleContainer>
      </StyledForm>
    </FormWrapper>
  );
}
