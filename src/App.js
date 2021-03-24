import "./styles.css";
import Btns from "./Btns";
import styled from "styled-components";
import React, { useState } from "react";
import Add from "./Add";
import { ColorContext } from "./color-context.js";

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
2. 样式的调整
*/

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
      ...appState,
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
      <Wrapper theme={appState.color.code}>
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
        <div>
          <h1>{color.name}</h1>
          <h2>{color.code}</h2>
          <P>{color.desc}</P>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

export default App;
