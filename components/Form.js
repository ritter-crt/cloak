import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function Form() {
  const router = useRouter();
  const items = useSWR ("/api/items/create");

  async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const newItem = Object.fromEntries(formData);
    console.log("newItem_____", newItem);

    const response = await fetch("/api/items/create", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      items.mutate();

      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <label htmlFor="image">upload image</label>
        <input id="image" name="image"></input>

        <label htmlFor="pattern">upload pdf</label>
        <input id="pattern" name="pattern"></input>

        <label htmlFor="title">title</label>
        <input id="title" name="title" placeholder="e.g long trouses"></input>

        <label htmlFor="description">description</label>
        <input id="description" name="description" placeholder="e.g occasion, season"></input>

        <label htmlFor="category">category</label>
        <select name="category" id="category">
          <option value="tops">tops</option>
          <option value="bottoms">bottoms</option>
          <option value="onesies">onesies</option>
          <option value="accessories">accessories</option>
        </select>

        <label htmlFor="difficulty">difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="beginner">beginner</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="intermediate">intermediate</option>
          <option value="intermediate">expert</option>
        </select>

        <label htmlFor="instructions">instructions</label>
        <textarea id="instructions" name="instructions" rows="5" placeholder="e.g preferred fabric, what you need"></textarea>

        <label htmlFor="price">price</label>
        <input id="price" name="price" type="number"></input>

        <button onClick={() => router.push("/profile")}>add</button>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 3rem 5rem 3rem;
`;
