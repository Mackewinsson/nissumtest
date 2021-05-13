import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const [input, setInput] = useState("");
  const [bullet, setBullet] = useState([]);
  const li = bullet.map((el) => {
    return <li>{el}</li>;
  });
  return (
    <>
      <Wrapper>
        <Input onChange={setInput} input={input} />
        <Button
          setBullet={setBullet}
          input={input}
          bullet={bullet}
          setInput={setInput}
        />
      </Wrapper>
      <Wrapper>
        <ul>{li}</ul>
      </Wrapper>
    </>
  );
}
