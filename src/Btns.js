import React from "react";
import Button from "./Button";
import styled from "styled-components";

const BtnWrapper = styled.div`
  padding: 0.6rem;
  column-gap: 0.6rem;
`;

class Btns extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      // <ColorContext.Consumer>
      // { {value=>{ }
      // return (
      <BtnWrapper>
        {Object.keys(this.props.colors).map((key) => (
          <Button
            key={key}
            color={this.props.colors[key]}
            setColor={this.props.setColor}
          />
        ))}
      </BtnWrapper>
      // )
      // }}
      // </ColorContext.Consumer>
    );
  }
}

export default Btns;
