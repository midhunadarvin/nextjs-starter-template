'use client';

import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-poppins',
});

const SixCaps = localFont({
  src: [
    {
      path: '../../../public/fonts/Six_Caps/SixCaps-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-six-caps',
});

import './app.scss';

import Cursor from '@/containers/home-page/cursor/Cursor';
import FeaturedProjects from '@/containers/home-page/featured-projects/FeaturedProjects';
import Hero from '@/containers/home-page/hero/Hero';
import { HeroFooter } from '@/containers/home-page/hero/hero-footer/HeroFooter';
import Navbar from '@/containers/home-page/navbar/Navbar';
import Parallax from '@/containers/home-page/parallax/Parallax';
import DefaultLayout from '@/containers/layout/default-layout';
export default function HomePage() {
  return (
    <>
      <Cursor />
      <DefaultLayout className={`${poppins.variable} ${SixCaps.variable} font-poppins`}>
        <section id='Homepage'>
          <Navbar />
          <Hero />
          <HeroFooter />
        </section>
        <section id='Services'>
          <FeaturedProjects />
        </section>
        <section>Services</section>

        <section id='Portfolio'>
          <Parallax type='portfolio' />
        </section>
        {/* <Portfolio /> */}
        <section id='Contact'>Contact</section>
      </DefaultLayout>
    </>
  );
}
