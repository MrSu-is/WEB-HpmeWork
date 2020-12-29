import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card, message } from "antd";
import { setToken } from "../Operation/Tokenop";
import { loginApi } from "../auth/Dolog";
import "./login.css";

function Login(props) {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // setToken(values.username);
        // props.history.push("/admin");
        loginApi({
          userName: values.username,
          password: values.password
        })
          .then(res => {
            if (res.code === "success") {
              message.success("登录成功");
              setToken(res.token);
              props.history.push("/admin");
            } else {
              message.info(res.message);
            }
            // console.log(res);
          })
          .catch(err => {
            // console.log(err);
            message.error("用户不存在");
          });
      }
    });
  };
  return (
    <Card title="这是一个简单的管理系统" className="login">
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item style={{left:'50%'}}>
          
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Form.create({ name: "loginForm" })(Login);
