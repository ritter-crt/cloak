import { useState } from "react";

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
            <input type="file" name="file" />
          </p>

          {patternSrc && !uploadDocData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
