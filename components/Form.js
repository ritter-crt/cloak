import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import ImageUpload from "./ImageUpload";

import { device } from "@/styles";
import {
  HeaderWrapper,
  StyledHeader,
  StyledInput,
  StyledLabel,
} from "./styled";
import { StyledButton } from "./Button";

export default function Form() {
  const [imageSrc, setImageSrc] = useState([]);
  const [uploadData, setUploadData] = useState();
  // console.log("HELLOOOOOOOOOOOOO", imageSrc)

  const router = useRouter();
  const items = useSWR("/api/items/create");

  function handleImageChange(event) {
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  }

  async function handleImageSubmit(event) {
    event.preventDefault();
    const fileInput = document.querySelector("[type=file]").files;
    const formData = new FormData();

    const imageArray = [];
    for (let i = 0; i < fileInput.length; i++) {
      let file = fileInput[i];
      formData.append("file", file);
      formData.append("upload_preset", "zez0acdp");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dk5lhzhul/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      setUploadData(data);
      imageArray.push(data.secure_url);
    }
    console.log(imageArray);
    setImageSrc(imageArray);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.createdAt = new Date().getTime();
    newItem.images = imageSrc;
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
          uploadData={uploadData}
          imageSrc={imageSrc}
          onImageChange={handleImageChange}
          onImageSubmit={handleImageSubmit}
        ></ImageUpload>
      </UploadWrapper>
      <EntryForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="pattern">upload pdf</StyledLabel>
        <StyledInput id="pattern" name="pattern"></StyledInput>

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

        <StyledLabel htmlFor="instructions">instructions</StyledLabel>
        <StyledTextarea
          id="instructions"
          name="instructions"
          rows="10"
          placeholder="e.g preferred fabric, what you need"
        ></StyledTextarea>

        <StyledLabel htmlFor="price">price</StyledLabel>
        <StyledInput id="price" name="price" type="number"></StyledInput>

        <StyledButton onClick={() => router.push("/home")}>
          upload sewing pattern
        </StyledButton>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  margin: 10% 10% 20% 10%;
  border-radius: 20px;
  box-shadow: var(--first-color) 0px 1px 3px;
  /* box-shadow: 0 3px 25.5px 4.5px rgba(0, 0, 0, 0.06); */
`;

const UploadWrapper = styled.div`
  display: flex;
  padding: 10%;
  justify-content: flex-start;
`;

const StyledTextarea = styled.textarea`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

const StyledSelect = styled.select`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;
