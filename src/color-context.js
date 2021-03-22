import React from "react";
export const colors = {
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

export const ColorContext = React.createContext({
  color: Object.values(colors)[0],
  setColor: () => {}
});
