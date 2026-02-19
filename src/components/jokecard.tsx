import styled from "styled-components";
import { Joke } from "../interfaces/joke.ts";

const AllJokesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #f7f6daff;
  padding: 30px;
`;

const SingleJokeDiv = styled.div`
  background-color: #fff8b0;
  color: #041f3cff;
  border: 3px solid #041f3cff;
  font-family: "Comic Sans MS", cursive, sans-serif;
  padding: 15px;
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
          <p style={{ fontStyle: "italic", color: "red" }}>{joke.punchline}</p>
        </SingleJokeDiv>
      ))}
    </AllJokesDiv>
  );
}