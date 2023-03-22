import { useState } from 'react';
import Head from 'next/head'

export default function ImageUpload({setUploadData, uploadData, setImageSrc, imageSrc, onImageChange, onImageSubmit}) {
//   const [imageSrc, setImageSrc] = useState();
//   const [uploadData, setUploadData] = useState();

//   function handleOnChange(changeEvent) {
//     const reader = new FileReader();

//     reader.onload = function(onLoadEvent) {
//       setImageSrc(onLoadEvent.target.result);
//       setUploadData(undefined);
//     }

//     reader.readAsDataURL(changeEvent.target.files[0]);
//   }

//   async function handleOnSubmit(event) {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

//     const formData = new FormData();

//     for ( const file of fileInput.files ) {
//       formData.append('file', file);
//     }

//     formData.append('upload_preset', 'zez0acdp');

//     const data = await fetch('https://api.cloudinary.com/v1_1/dk5lhzhul/image/upload', {
//       method: 'POST',
//       body: formData
//     }).then(r => r.json());
//     console.log(data.secure_url)
//     setImageSrc(data.secure_url);
//     setUploadData(data);
//   }

  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Image Uploader
        </h1>

        <p>
          Upload your image to Cloudinary!
        </p>

        <form method="post" onChange={onImageChange} onSubmit={onImageSubmit}>
          <p>
            <input type="file" name="file" />
          </p>
          
          <img src={imageSrc} width="500px" height="auto" />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <p>uploaded</p>
          )}
        </form>
      </main>
    </div>
  )
}