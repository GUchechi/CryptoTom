import React, { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "CryptoCurrency",
    count: simplified ? 6 : 12,
  });

  console.log(cryptoNews);
  // if (!cryptoNews?.value) return "Loading...";

  return <div>News</div>;
};

export default News;
