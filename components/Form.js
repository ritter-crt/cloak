import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

import { device } from "@/styles";
import styled from "styled-components";
import { HeaderWrapper, StyledHeader } from "./styled";

import {
  EntryForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
} from "./StyledForm";

import ImageUpload from "./ImageUpload";

import { StyledButton } from "./Button";
import DocumentUpload from "./DocumentUpload";

export default function Form({}) {
  const [imageSrc, setImageSrc] = useState([]);
  const [patternSrc, setPatternSrc] = useState();

  const router = useRouter();
  const items = useSWR("/api/items/create");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.createdAt = new Date().getTime();
    newItem.images = imageSrc;
    newItem.pattern = patternSrc;
    // console.log("newItem______________________________________", newItem);

    const response = await fetch("/api/items/create", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      items.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <HeaderWrapper>
        <StyledHeader>Upload</StyledHeader>
      </HeaderWrapper>
      <UploadWrapper>
        <ImageUpload
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
        ></ImageUpload>
        <DocumentUpload
          patternSrc={patternSrc}
          setPatternSrc={setPatternSrc}
        ></DocumentUpload>
      </UploadWrapper>
      <EntryForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">title</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          placeholder="e.g long trouses"
        ></StyledInput>

        <StyledLabel htmlFor="description">description</StyledLabel>
        <StyledInput
          id="description"
          name="description"
          placeholder="e.g occasion, season"
        ></StyledInput>

        <StyledLabel htmlFor="category">category</StyledLabel>
        <StyledSelect name="category" id="category">
          <option value="tops">tops</option>
          <option value="bottoms">bottoms</option>
          <option value="onesies">onesies</option>
          <option value="accessories">dresses</option>
          <option value="accessories">jackets & coats</option>
          <option value="accessories">accessories</option>
        </StyledSelect>

        <StyledLabel htmlFor="difficulty">difficulty</StyledLabel>
        <StyledSelect name="difficulty" id="difficulty">
          <option value="beginner">beginner</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="intermediate">intermediate</option>
          <option value="intermediate">expert</option>
        </StyledSelect>

        <StyledLabel htmlFor="instructions">
          please provide some instructions
        </StyledLabel>
        <StyledTextarea
          id="instructions"
          name="instructions"
          rows="5"
          placeholder="e.g preferred fabric, what you need"
        ></StyledTextarea>

        <StyledLabel htmlFor="price">price</StyledLabel>
        <StyledInput
          id="price"
          name="price"
          type="number"
          defaultValue="€"
          min="1"
          max="99"
        ></StyledInput>

        <StyledButton onClick={() => router.push("/home")}>
          upload your pattern
        </StyledButton>
      </EntryForm>
    </>
  );
}

const UploadWrapper = styled.div`
  display: flex;
  padding: 10%;
  justify-content: flex-start;
`;
