import { refreshPage } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import ImageUpload from "./ImageUpload";

export default function Form() {
  const [imageSrc, setImageSrc] = useState([]);
  const [uploadData, setUploadData] = useState();

  // console.log("HELLOOOOOOOOOOOOO", imageSrc)

  const router = useRouter();
  const items = useSWR("/api/items/create");

  function refreshPage() {
    const fetchData = async () => {
      const data = await fetch("/api/items");
      const items = await data.json();
    };
    fetchData().catch(console.error);
  }

  function handleImageChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(changeEvent.target.files);
  }

  async function handleImageSubmit(event) {
    event.preventDefault();

    const fileInput = document.querySelector("[type=file]").files;

    const formData = new FormData();

    const imageArray =[];

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
      imageArray.push(data.secure_url)
    }
    setImageSrc(imageArray);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.createdAt = new Date().getTime();
    newItem.images = imageSrc;
    console.log("newItem______________________________________", newItem);
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
    refreshPage();
  }

  return (
    <>
      <ImageUpload
        uploadData={uploadData}
        imageSrc={imageSrc}
        onImageChange={handleImageChange}
        onImageSubmit={handleImageSubmit}
      ></ImageUpload>
      <EntryForm onSubmit={handleSubmit}>
        {/* <label htmlFor="image">upload image</label>
        <input id="image" name="image"></input> */}

        <label htmlFor="pattern">upload pdf</label>
        <input id="pattern" name="pattern"></input>

        <label htmlFor="title">title</label>
        <input id="title" name="title" placeholder="e.g long trouses"></input>

        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          placeholder="e.g occasion, season"
        ></input>

        <label htmlFor="category">category</label>
        <select name="category" id="category">
          <option value="tops">tops</option>
          <option value="bottoms">bottoms</option>
          <option value="onesies">onesies</option>
          <option value="accessories">accessories</option>
        </select>

        <label htmlFor="difficulty">difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="beginner">beginner</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="intermediate">intermediate</option>
          <option value="intermediate">expert</option>
        </select>

        <label htmlFor="instructions">instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="5"
          placeholder="e.g preferred fabric, what you need"
        ></textarea>

        <label htmlFor="price">price</label>
        <input id="price" name="price" type="number"></input>

        {/* <button onClick={() => router.push("/home")}>add</button> */}
        <button>add</button>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 3rem 5rem 3rem;
`;
