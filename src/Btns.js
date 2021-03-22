import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { colors } from "./color-context";

const BtnWrapper = styled.div`
  padding: 0.6rem;
  column-gap: 0.6rem;
`;

function Btns() {
  return (
    <BtnWrapper>
      {Object.keys(colors).map((key) => (
        <Button key={key} color={colors[key]} />
      ))}
    </BtnWrapper>
  );
}

export default Btns;
