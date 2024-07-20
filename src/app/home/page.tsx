'use client';
import './app.scss';

import Hero from '@/containers/home-page/hero/Hero';
import Navbar from '@/containers/home-page/navbar/Navbar';
import Parallax from '@/containers/home-page/parallax/Parallax';
import Portfolio from '@/containers/home-page/portfolio/Portfolio';
import DefaultLayout from '@/containers/layout/default-layout';
export default function HomePage() {
  return (
    <DefaultLayout>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <Portfolio />
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      {/* <Portfolio />
      <section>Portfolio2</section>
      <section id='Contact'>Contact</section> */}
    </DefaultLayout>
  );
}
