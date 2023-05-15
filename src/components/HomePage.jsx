import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
    </>
  )
}

export default HomePage