import "./styles.css";
import Btns from "./Btns";
import styled from "styled-components";
import React, { useState } from "react";
import Add from "./Add";
import { ColorContext } from "./color-context.js";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme || "white"};
  transition: all 1s ease-in-out;
`;
const Desc = styled.div`
  width: 26%;
  color: ${(props) => (props.theme ? "#fff" : "#000")};
  transition: color 1s;
  &:hover {
    color: ${(props) => (props.theme ? "#000" : "#fff")};
  }
  cursor: pointer;
  > .paragraph {
    text-align: left;
    text-indent: 2em;
  }
`;

function App() {
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
  const [appState, setAppState] = useState({
    colors: colors,
    color: Object.values(colors)[0]
  });
  const setColors = (key, value) => {
    let temp = {
      ...appState.colors
    };
    temp[key] = value;
    setAppState({
      color: value,
      colors: temp
    });
    window.localStorage.setItem("colors", JSON.stringify(temp));
  };
  const setColor = (color) => {
    setAppState({
      ...appState,
      color: color
    });
  };
  return (
    <ColorContext.Provider
      value={{
        color: appState.color,
        setColor: setColor,
        colors: appState.colors,
        setColors: setColors
      }}
    >
      <Wrapper theme={appState.color.code} className="clearfix">
        <Btns />
        <Description />
        <Add />
      </Wrapper>
    </ColorContext.Provider>
  );
}
function Description() {
  return (
    <ColorContext.Consumer>
      {({ color }) => (
        <Desc theme={color.code}>
          <h1>{color.name}</h1>
          <h2>{color.code}</h2>
          <p className="paragraph">{color.desc}</p>
        </Desc>
      )}
    </ColorContext.Consumer>
  );
}
export default App;
