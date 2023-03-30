export default function DownloadPattern() {
  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dk5lhzhul/image/upload";
  async function getAttachment(id) {
    return await cloudinaryUrl(id, {
      flags: "attachment:imgname",
    });
  }
  return <button onClick={getAttachment}>Download File here</button>;
}
