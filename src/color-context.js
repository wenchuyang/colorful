import React from "react";

function colorInit() {
  try {
    let localValue = window.localStorage.getItem("colors");
    return JSON.parse(localValue);
  } catch (e) {
    return undefined;
  }
}

export const colors = colorInit() || {
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

export const updateColors = (key, value) => {
  colors[key] = value;
  window.localStorage.setItem("colors", JSON.stringify(colors));
};

export const ColorContext = React.createContext({
  color: Object.values(colors)[0],
  setColor: () => {}
});
