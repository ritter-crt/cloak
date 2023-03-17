import { useRouter } from "next/router";
import styled from "styled-components";

export default function Form() {
  const router = useRouter();
  return (
    <>
      <h1>Hello add!</h1>
      <EntryForm>
        <label htmlFor="title">
          title
        </label>
        <input id="title" placeholder="e.g trouses" name="title"></input>
        <label htmlFor="image">upload image</label>
        <input id="image" name="image"></input>
        <label htmlFor="pattern">upload pdf</label>
        <input id="pattern" name="pattern"></input>
        <label htmlFor="category">category</label>
        <input id="category" name="category"></input>
        <label htmlFor="difficulty">price</label>
        <input id="price" name="description" type="number"></input>
        <button onClick={() => router.push("/home")}>add</button>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 3rem 5rem 3rem;
`;
