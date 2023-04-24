import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { ThreeDots, Triangle, Oval } from 'react-loader-spinner';

import {
  Wrapper,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
} from './common/Form.styles';

import ImageUpload from './UploadImage';

import DocumentUpload from './UploadPattern';
import { categoryArray, difficultyArray } from '../utils';
import { useSession } from 'next-auth/react';
import { Text } from './styled';
import { Button } from './common/Button.styles';

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
    <Wrapper>
      <ImageUpload imageSrc={imageSrc} setImageSrc={setImageSrc}></ImageUpload>
      <DocumentUpload
        patternSrc={patternSrc}
        setPatternSrc={setPatternSrc}
      ></DocumentUpload>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">title</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          placeholder="e.g long trouses"
          maxLength="25"
          // required
        ></StyledInput>
        <StyledLabel htmlFor="description">description</StyledLabel>
        <StyledInput
          id="description"
          name="description"
          placeholder="e.g occasion, season"
          maxLength="50"
          // required
        ></StyledInput>
        <StyledLabel htmlFor="category">select a category</StyledLabel>
        <StyledSelect name="category" id="category">
          {categoryArray &&
            categoryArray.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </StyledSelect>

        <StyledLabel htmlFor="difficulty">
          select a difficulty level
        </StyledLabel>
        <StyledSelect name="difficulty" id="difficulty">
          {difficultyArray &&
            difficultyArray.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
        </StyledSelect>

        <StyledLabel htmlFor="instructions">
          provide some instructions
        </StyledLabel>

        <StyledTextarea
          id="instructions"
          name="instructions"
          rows="5"
          maxLength="300"
          value={inputText}
          onChange={handleChange}
          isInvalid={inputText.length > characterLimit}
          // required
        ></StyledTextarea>
        <Text>
          {inputText.length}/{characterLimit}
        </Text>
        <StyledLabel htmlFor="price">price</StyledLabel>
        <StyledInput
          id="price"
          name="price"
          type="number"
          defaultValue="€"
          min="1"
          max="99"
        ></StyledInput>
        <TriangleContainer>
          {!isButtonLoading ? (
            <Button width>upload your pattern</Button>
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
    </Wrapper>
  );
}

const TriangleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;