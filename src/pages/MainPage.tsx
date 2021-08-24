import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import Web3 from "web3";
import { Web3Adapter } from "@gnosis.pm/safe-core-sdk";
import Safe from "@gnosis.pm/safe-core-sdk";
import { useWeb3React } from "@web3-react/core";
import { SAFE_ADDRESS } from "../constants";
import { SafeTransactionDataPartial } from "@gnosis.pm/safe-core-sdk-types";

const BidForm: React.FC = () => {
  const { account, library } = useWeb3React();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
    } catch (e) {
      console.log(e);
      message.error(e.message || "Error on submit");
    }
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
        label="NFT ID"
        name="nftId"
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
