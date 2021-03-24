import React from "react";
import styled from "styled-components";
import { ColorContext } from "./color-context.js";

const Btn = styled.div`
  margin-top: 0.4rem;
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => (props.color ? "#fff" : "#000")};
  font-size: 1.2rem;
  cursor: pointer;
`;

function Button(props) {
  return (
    <ColorContext.Consumer>
      {({ setColor }) => (
        <Btn onClick={() => setColor(props.color)} color={props.color.code}>
          <div>{props.color.name}</div>
          <div>{props.color.code}</div>
        </Btn>
      )}
    </ColorContext.Consumer>
  );
}
export default Button;
