import React from "react";
import { Layout, Button } from "antd";
import { useSafeAppsSDK } from "@gnosis.pm/safe-apps-react-sdk";
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;

export const MainLayout: React.FC = ({ children }) => {
  const { sdk, connected, safe } = useSafeAppsSDK();
  console.log(safe.safeAddress);
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "wheat", float: "left" }}> OpenSea Auction </h3>
        <Button type="primary" style={{ float: "right" }}>
          {" "}
          Connect Wallet{" "}
        </Button>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created By Comity Labs.</Footer>
    </Layout>
  );
};
