import React from "react";
import styled from "styled-components";
import "./imgs/add.svg";

const Div = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 1px solid red;
`;

function Add() {
  return (
    <Div>
      <svg
        t="1616383751252"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1120"
        width="20"
        height="20"
      >
        <path
          d="M732.16 476.586667h-183.466667v-183.466667a35.84 35.84 0 1 0-72.106666 0v183.466667H291.84a35.84 35.84 0 1 0 0 72.106666h184.32v182.613334a35.84 35.84 0 1 0 72.106667 0v-182.613334h183.466666a35.84 35.84 0 1 0 0-72.106666z m91.306667 346.453333A439.893333 439.893333 0 1 1 341.333333 106.666667a439.893333 439.893333 0 0 1 481.706667 716.373333zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
          fill="#ff0000"
          p-id="1121"
        ></path>
      </svg>
    </Div>
  );
}
export default Add;
