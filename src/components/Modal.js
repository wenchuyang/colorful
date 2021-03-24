import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModalRoot = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  > .box {
    position: relative;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    > .title {
      padding: 0.4rem 1.2rem;
      text-align: center;
      font-size: 1.2rem;
      background: #ccc;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    > .content {
      padding: 0.4rem 1.2rem;
    }
    > .bottom {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 1.2rem 0.6rem;
    }
  }
`;
const Button = styled.button`
  padding: 0.2rem 0.6rem;
`;

function Dialog(props) {
  const {
    visible,
    onClose,
    onSubmit,
    title,
    children,
    cancelText,
    submitText
  } = props;
  return (
    visible &&
    ReactDOM.createPortal(
      <StyledModalRoot onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className="box">
          <div className="title">{title || "信息"}</div>
          <div className="content">{children}</div>
          <div className="bottom">
            <Button onClick={onClose}>{cancelText || "取消"}</Button>
            <Button type="submit" onClick={onSubmit}>
              {submitText || "提交"}
            </Button>
          </div>
        </div>
      </StyledModalRoot>,
      document.body
    )
  );
}

export default Dialog;
