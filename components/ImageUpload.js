import Image from "next/image";

export default function ImageUpload({
  uploadData,
  imageSrc,
  onImageChange,
  onImageSubmit,
}) {
  console.log(imageSrc);

  return (
    <div>
      <h1>
        <link rel="icon" href="/favicon.ico" />
      </h1>
      <main>
        <form method="post" onChange={onImageChange} onSubmit={onImageSubmit}>
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
