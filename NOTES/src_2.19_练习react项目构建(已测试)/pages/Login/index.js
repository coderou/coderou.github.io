import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color={"#000"} />}
          onLeftClick={() => {
            console.log("你点击了返回按钮");
          }}
        >
          硅谷登录注册
        </NavBar>
      </div>
    );
  }
}
