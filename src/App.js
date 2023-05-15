import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
