import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  Exchanges,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptoCurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId"  element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5} 
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/"> CryptoTom Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges"> Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
