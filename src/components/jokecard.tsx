import styled from "styled-components";
import { Joke } from "../interfaces/joke.ts";

const AllJokesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #fff8b0;
  padding: 20px;
`;

const SingleJokeDiv = styled.div`
  background-color: #fff8b0;
  color: white;
  border: 2px solid #1e90ff;
  font-family: "Comic Sans MS", cursive, sans-serif;
  padding: 15px;
  width: 250px;
  text-align: center;
  border-radius: 5px;
`;

interface Props {
  data: Joke[];
}

export default function Jokes({ data }: Props) {
  return (
    <AllJokesDiv>
      {data.map((joke, index) => (
        <SingleJokeDiv key={index}>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
          <p style={{ fontStyle: "italic", color: "white" }}>Type: {joke.type}</p>
        </SingleJokeDiv>
      ))}
    </AllJokesDiv>
  );
}