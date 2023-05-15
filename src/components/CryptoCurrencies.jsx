import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';

const CryptoCurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  // const [searchTerm, setSearchTerm] = useState('');

  console.log(cryptos)


  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container"></Row>
    </>
  )
}

export default CryptoCurrencies
