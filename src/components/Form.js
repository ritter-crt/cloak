import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

import styled from "styled-components";

import {
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
} from "./StyledForm";

import ImageUpload from "./ImageUpload";

import DocumentUpload from "./DocumentUpload";
import { categoryArray, difficultyArray } from "@/utils";

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
    <Wrapper>
      <ImageUpload imageSrc={imageSrc} setImageSrc={setImageSrc}></ImageUpload>
      <DocumentUpload
        patternSrc={patternSrc}
        setPatternSrc={setPatternSrc}
      ></DocumentUpload>
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
          <option defaultValue="category">select a category</option>
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

        <UploadButton onClick={() => router.push("/home")}>
          upload your pattern
        </UploadButton>
      </EntryForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  border-radius: 20px;
  box-shadow: black 0px 1px 3px;
`;

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UploadButton = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 2px;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  padding: 10px;
  background-color: black;
  border-radius: 40px;
  border: none;
  transition-delay: 0.3s;
  font-size: 10pt;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
