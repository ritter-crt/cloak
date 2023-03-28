export default function DownloadPattern() {
  const handleDownload = async (fileName) => {
    const response = await fetch("/api/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      return;
    } else {
      const data = await response.json();
      const linkSource = `data:application/pdf;base64,${data}`;
      const a = document.createElement("a");
      const fileName = `${fileName}.pdf`;
      a.style.display = "none";
      a.href = linkSource;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    return <button onClick={handleDownload}>Download File here </button>;
  };
}
