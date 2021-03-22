import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { colors } from "./color-context";

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-wrap: wrap;
  padding: 0.6rem;
  column-gap: 0.6rem;
`;

function Btns() {
  return (
    <Wrapper>
      {Object.keys(colors).map((key) => (
        <Button key={key} color={colors[key]} />
      ))}
    </Wrapper>
  );
}

export default Btns;
