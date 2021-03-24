import React from "react";
import Button from "./Button";
import styled from "styled-components";

const BtnWrapper = styled.div`
  padding: 0.6rem;
  column-gap: 0.6rem;
`;

function Btns(props) {
  return (
    // <ColorContext.Consumer>
    // { {value=>{ }
    // return (
    <BtnWrapper>
      {Object.keys(props.colors).map((key) => (
        <Button key={key} color={props.colors[key]} setColor={props.setColor} />
      ))}
    </BtnWrapper>
    // )
    // }}
    // </ColorContext.Consumer>
  );
}

export default Btns;
