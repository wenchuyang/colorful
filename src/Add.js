import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;
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
      display: flex;
      flex-direction: column;
      padding: 0.4rem 1.2rem;
      > .item {
        margin: 0.4rem 0;
      }
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

class Modal extends React.Component {
  render() {
    const { visible, onClose } = this.props;
    const onSubmit = () => {
      onClose();
    };
    return (
      visible &&
      ReactDOM.createPortal(
        <StyledModalRoot onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} className="box">
            <div className="title">title</div>
            <div className="content">
              <label className="item">
                颜色名称：
                <input />
              </label>
              <label className="item">
                颜色代码：
                <input />
              </label>
              <label className="item">
                相关描述：
                <input />
              </label>
            </div>
            <div className="bottom">
              <Button onClick={onClose}>Close</Button>
              <Button onClick={onSubmit}>Submit</Button>
            </div>
          </div>
        </StyledModalRoot>,
        document.body
      )
    );
  }
}

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      showModal: () => {
        this.setState({ visible: true });
      },
      handleCloseModal: () => {
        this.setState({ visible: false });
      }
    };
  }
  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          onClose={this.state.handleCloseModal}
        />
        <Svg viewBox="0 0 1024 1024" onClick={this.state.showModal}>
          <path
            d="M732.16 476.586667h-183.466667v-183.466667a35.84 35.84 0 1 0-72.106666 0v183.466667H291.84a35.84 35.84 0 1 0 0 72.106666h184.32v182.613334a35.84 35.84 0 1 0 72.106667 0v-182.613334h183.466666a35.84 35.84 0 1 0 0-72.106666z m91.306667 346.453333A439.893333 439.893333 0 1 1 341.333333 106.666667a439.893333 439.893333 0 0 1 481.706667 716.373333zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
            fill="#fff"
          ></path>
        </Svg>
      </div>
    );
  }
}
export default Add;
