import Image from "next/image";
import { useState } from "react";

export default function ImageUpload({
  // uploadData,
  imageSrc,
  setImageSrc,
  // onImageChange,
  // onImageSubmit,
}) {
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
        <form
          method="post"
          onChange={handleImageChange}
          onSubmit={handleImageSubmit}
        >
          <input type="file" name="file" multiple />
          {imageSrc.map((image, small_id) => (
            <Image
              src={image}
              key={small_id}
              width="500"
              height="500"
              alt="some image"
            />
          ))}
          {imageSrc && !uploadData && (
            <p>
              <button>upload your images</button>
            </p>
          )}
          {uploadData && <p>uploaded</p>}
        </form>
      </main>
    </div>
  );
}
