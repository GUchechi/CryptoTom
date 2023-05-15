import { Routes, Route } from "react-router-dom";
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
              <Route index path="/" element={HomePage} />
              <Route path="/exchanges" element={Exchanges} />
              <Route path="/cryptoCurrencies" element={CryptoCurrencies} />
              <Route path="/crypto/:coinId" element={CryptoDetails} />
              <Route path="/news" element={News} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
