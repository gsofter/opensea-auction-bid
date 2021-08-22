import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const BidForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="OpenSea URL"
        name="bidUrl"
        rules={[{ required: true, message: "Please input your opensea url!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Safe address"
        name="safeAddress"
        initialValue={"0x22dafd3232"}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="TotalBalance"
        name="totalBalance"
        initialValue={"9 ETH"}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Make Offer
        </Button>
      </Form.Item>
    </Form>
  );
};

export const MainPage: React.FC = () => {
  return (
    <Row justify="start">
      <Col xs={24} md={18} lg={12}>
        <BidForm />
      </Col>
    </Row>
  );
};
