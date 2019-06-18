import React from "react";
import { Modal, Input, Icon, Form } from "antd";
import PropTypes from "prop-types";

const LoginModal = Form.create({ name: "login_form" })(
  class UnwrappedLoginModal extends React.Component {
    render() {
      const { showModal, handleCancelLogin, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          title="Login"
          visible={showModal}
          // onOk={this.handleOk}
          // confirmLoading={confirmLoading}
          onCancel={handleCancelLogin}
          maskClosable={false}
          okText="Login"
        >
          <Form>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

LoginModal.propTypes = {
  showModal: PropTypes.bool,
  handleCancelLogin: PropTypes.func.isRequired
};

export default LoginModal;
