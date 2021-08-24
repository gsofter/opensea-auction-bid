import React from "react";
import { Layout, Button } from "antd";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import "./MainLayout.css";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const { Header, Content, Footer } = Layout;

export const MainLayout: React.FC = ({ children }) => {
  const { activate, deactivate, account, library, chainId } = useWeb3React();

  const handleConnectWallet = () => {
    if (!account) {
      activate(injected, undefined, true)
        .then((res) => {})
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(injected);
          } else {
            console.info("Connection Error - ", error);
          }
        });
    }
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(address.length - 5)}`;
  };

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
        <h3 style={{ color: "wheat", float: "left" }}> gMold NFT Auction </h3>
        {!account && (
          <Button
            type="primary"
            style={{ float: "right" }}
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        )}
        {account && (
          <p style={{ float: "right", color: "white" }}>
            {shortenAddress(account)}
          </p>
        )}
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
