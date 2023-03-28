import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function UploadImage({ imageSrc, setImageSrc }) {
  console.log(imageSrc);
  const [uploadData, setUploadData] = useState();

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

  return (
    <div>
      <h1>
        <link rel="icon" href="/favicon.ico" />
      </h1>
      <main>
        <UploadWrapper>
          <form
            method="post"
            onChange={handleImageChange}
            onSubmit={handleImageSubmit}
          >
            <Input multiple />
            {imageSrc.map((image, small_id) => (
              <ImageWrapper key={small_id}>
                <StyledImage
                  src={image}
                  width="150"
                  height="150"
                  alt="some image"
                />
              </ImageWrapper>
            ))}
            {imageSrc && !uploadData && (
              <p>
                <StyledButton>upload your images</StyledButton>
              </p>
            )}
            {uploadData && <p>uploaded</p>}
          </form>
        </UploadWrapper>
      </main>
    </div>
  );
}

const Input = styled.input.attrs({
  type: "file",
})`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px 10px;
  outline: none;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const StyledButton = styled.button`
  width: 150px;
  color: black;
  margin: 2px;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  padding: 10px;
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

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 6px;
  width: 60%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
