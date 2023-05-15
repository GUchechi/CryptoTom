import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);
  return <div>News</div>;
};

export default News;
