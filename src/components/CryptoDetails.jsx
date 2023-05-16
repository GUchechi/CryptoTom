import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useGetCryptosQuery } from "../services/CryptoApi";
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const [timeperiod, setTimeperiod] = useState('7d');
const {coinId} = useParams()



  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
