import Hero from '../components/index/Hero';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Note from '../components/index/Note';

const Index = () => {
  return (
    <>
      {/* It's a good idea to include a title as such on each page. */}
      <NextSeo title='Coming soon' />
      {/* Your main content goes here. */}
      <div className='min-h-screen flex flex-col justify-between'>
        <Hero />
        <Note />
      </div>
    </>
  );
};

export default Index;
