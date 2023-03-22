import Head from "next/head";
import Image from "next/image";

export default function ImageUpload({
  uploadData,
  imageSrc,
  onImageChange,
  onImageSubmit,
}) {
  console.log("______________________________________________________________________", imageSrc);

  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Image Uploader</h1>

        <p>Upload your image to Cloudinary!</p>

        <form method="post" onChange={onImageChange} onSubmit={onImageSubmit}>
          <label htmlFor="images">
            <input id="images" name="images" type="file"  multiple />
          </label>
          {/* {imageSrc.map((link) => ( */}
            <img src={imageSrc} width="500" height="auto" />
          {/* ))} */}
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && <p>uploaded</p>}
        </form>
      </main>
    </div>
  );
}
