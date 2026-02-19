import JokeCard from "./components/jokecard.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Joke } from "./interfaces/joke.ts";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px solid #fff8b0;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: white;
`;

export default function App() {
  const [data, setData] = useState<Joke[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://official-joke-api.appspot.com/jokes/ten");
      const results: Joke[] = await rawData.json();
      setData(results);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <JokeCard data={data} />
    </ParentDiv>
  );
}