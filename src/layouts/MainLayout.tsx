import React from "react";
import { Layout } from "antd";
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <h3 style={{ color: "wheat" }}> OpenSea Auction </h3>
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
