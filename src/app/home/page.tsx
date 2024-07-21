'use client';
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

import './app.scss';

import Hero from '@/containers/home-page/hero/Hero';
import Navbar from '@/containers/home-page/navbar/Navbar';
import Parallax from '@/containers/home-page/parallax/Parallax';
import Portfolio from '@/containers/home-page/portfolio/Portfolio';
import DefaultLayout from '@/containers/layout/default-layout';
export default function HomePage() {
  return (
    <>
      <DefaultLayout>
        <section id='Homepage' className={`${dm_sans.variable}`}>
          <Navbar />
          <Hero />
        </section>
        <section id='Services'>
          <Parallax type='services' />
        </section>
        <section>Services</section>

        <section id='Portfolio'>
          <Parallax type='portfolio' />
        </section>
        <Portfolio />
        <section id='Contact'>Contact</section>
      </DefaultLayout>
    </>
  );
}
