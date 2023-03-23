import Head from 'next/head'

export default function ImageUpload({ uploadData, imageSrc, onImageChange, onImageSubmit}) {
    console.log(imageSrc)

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
            <input type="file" name="file" multiple />
          </p>
          {imageSrc.map((imageSrc) => (
          <img src={imageSrc} width="500px" height="auto" />
          ))}
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