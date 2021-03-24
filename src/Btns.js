import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { ColorContext } from "./color-context";

const BtnWrapper = styled.div`
  padding: 0.6rem;
  column-gap: 0.6rem;
`;

function Btns() {
  return (
    <ColorContext.Consumer>
      {({ colors }) => (
        <BtnWrapper>
          {Object.keys(colors).map((key) => (
            <Button key={key} color={colors[key]} />
          ))}
        </BtnWrapper>
      )}
    </ColorContext.Consumer>
  );
}

export default Btns;
