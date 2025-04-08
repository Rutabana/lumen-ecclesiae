import React from 'react';
import Layout from '../layout';
import HeroSection from '../components/HeroSection';
import Liturgies from '../components/Liturgies';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <section className="bg-antique-white py-12">
        <Liturgies />
      </section>
    </Layout>
  );
}
