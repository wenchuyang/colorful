import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";

const Svg = styled.svg`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  > .item {
    margin-top: 0.2rem;
  }
`;
function AddModal(props) {
  this.formElem = React.createRef();
  function submit(e) {
    e.preventDefault();
    let formData = new FormData(this.formElem.current);
    let color = {};
    for (var pair of formData.entries()) {
      if (pair[0] === "code") pair[1] = pair[1].toUpperCase();
      color[pair[0]] = pair[1];
    }
    props.setColors(formData.get("code"), color);
    props.onClose();
  }
  const config = {
    visible: props.visible,
    onClose: props.onClose,
    onSubmit: submit,
    title: "添加颜色",
    cancelText: "cancel",
    submitText: "submit"
  };
  return (
    <Modal {...config}>
      <Form ref={this.formElem}>
        <label className="item">
          颜色名称：
          <input name="name" />
        </label>
        <label className="item">
          颜色代码：
          <input name="code" />
        </label>
        <label className="item">
          相关描述：
          <input name="desc" />
        </label>
      </Form>
    </Modal>
  );
}
function Add(props) {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCloseModal = () => {
    setVisible(false);
  };
  return (
    <div onClick={showModal}>
      <AddModal
        setColors={props.setColors}
        visible={visible}
        onClose={handleCloseModal}
      />
      <Svg viewBox="0 0 1024 1024" onClick={showModal}>
        <path
          d="M732.16 476.586667h-183.466667v-183.466667a35.84 35.84 0 1 0-72.106666 0v183.466667H291.84a35.84 35.84 0 1 0 0 72.106666h184.32v182.613334a35.84 35.84 0 1 0 72.106667 0v-182.613334h183.466666a35.84 35.84 0 1 0 0-72.106666z m91.306667 346.453333A439.893333 439.893333 0 1 1 341.333333 106.666667a439.893333 439.893333 0 0 1 481.706667 716.373333zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
          fill="#fff"
        ></path>
      </Svg>
    </div>
  );
}

export default Add;
