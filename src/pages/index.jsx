import React from 'react';
import Layout from '../components/layout/Layout';
import Promo from '../components/promo/Promo';
import { promo } from '../data/promo';

const IndexPage = () => {
  return (
    <Layout>
      <Promo title={promo.title} code={promo.code} />
    </Layout>
  );
};

export default IndexPage;
