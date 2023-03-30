import { useState } from "react";
import styled from "styled-components";

export default function DocumentUpload({ patternSrc, setPatternSrc }) {
  const [uploadDocData, setUploadDocData] = useState();

  function handleDocChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setPatternSrc(onLoadEvent.target.result);
      setUploadDocData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleDocSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "ypfhsjva");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dk5lhzhul/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setPatternSrc(data.secure_url);
    setUploadDocData(data);
  }

  return (
    <div>
      <title>Document Uploader</title>
      <main>
        <form
          method="post"
          onChange={handleDocChange}
          onSubmit={handleDocSubmit}
        >
          <p>
            <Input type="file" name="file" />
          </p>

          {patternSrc && !uploadDocData && (
            <p>
              <StyledButton>Upload Files</StyledButton>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px;
  outline: none;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const StyledButton = styled.button`
  width: fit-content;
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
