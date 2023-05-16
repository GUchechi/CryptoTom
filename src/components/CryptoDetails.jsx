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
import { useGetCryptoDetailsQuery } from "../services/CryptoApi";
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const [timeperiod, setTimeperiod] = useState("7d");
  const { coinId } = useParams();
  const {data, isFetching} = useGetCryptoDetailsQuery(coinId)
  
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
