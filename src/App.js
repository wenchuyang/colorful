import "./styles.css";
import Btns from "./Btns";
import styled from "styled-components";
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

// const ColorContext = React.createContext({
//   color: Object.values(colors)[0],
//   setColor: () => {}
// });

class App extends React.Component {
  constructor() {
    super();
    function colorInit() {
      try {
        let localValue = window.localStorage.getItem("colors");
        return JSON.parse(localValue);
      } catch (e) {
        return undefined;
      }
    }

    const colors = colorInit() || {
      "#c3272b": {
        name: "赤色",
        code: "#c3272b",
        desc: "Hi, my wonderful red ."
      },
      "#D3B17D": {
        name: "枯黄",
        code: "#d3b17d",
        desc: "Hi, my wonderful yellow ."
      }
    };
    this.state = {
      colors: colors,
      setColors: (key, value) => {
        let temp = {
          ...this.state.colors
        };
        temp[key] = value;
        this.setState({
          colors: temp
        });
        window.localStorage.setItem("colors", JSON.stringify(temp));
      },
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
      // <ColorContext.Provider value={this.state}>
      <Wrapper theme={this.state.color.code}>
        <Btns colors={this.state.colors} setColor={this.state.setColor} />
        <Description color={this.state.color} />
        <Add setColors={this.state.setColors} />
      </Wrapper>
      // </ColorContext.Provider>
    );
  }
}

function Description(props) {
  return (
    // <ColorContext.Consumer>
    // {(param) => (
    <div>
      <h1>{props.color.name}</h1>
      <h2>{props.color.code}</h2>
      <P>{props.color.desc}</P>
    </div>
    //)}
    //</ColorContext.Consumer>
  );
}

export default App;
