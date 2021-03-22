import "./styles.css";
import Btns from "./Btns";
import styled from "styled-components";
import { ColorContext, colors } from "./color-context";
import React from "react";
import Add from "./Add";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme || "white"};
  color: ${(props) => (props.theme.length === 7 ? "#fff" : "#000")};
`;
const P = styled.p`
  text-align: left;
  text-indent: 2em;
`;

/*
1. 代码的封装优化，页面自动更新那里，看一下怎么弄...
2. 样式的调整
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: Object.values(colors)[0],
      setColor: (color) => {
        this.setState({
          color: color
        });
      }
    };
  }
  render() {
    return (
      <ColorContext.Provider value={this.state}>
        <Wrapper theme={this.state.color.code}>
          <Btns />
          <Description />
          <Add />
        </Wrapper>
      </ColorContext.Provider>
    );
  }
}

function Description() {
  return (
    <ColorContext.Consumer>
      {(param) => (
        <div>
          <h1>{param.color.name}</h1>
          <h2>{param.color.code}</h2>
          <P>{param.color.desc}</P>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

export default App;
