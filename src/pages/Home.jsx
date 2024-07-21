// Home.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HomePage/heroSection';
import Section1 from '../components/HomePage/section1';
import Section2 from '../components/HomePage/section2';
import Footer from '../components/HomePage/Footer';


const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true });
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true });
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true });

  return (
    <div>
      <div ref={heroRef} className={`section ${heroInView ? 'visible' : ''}`}>
        <HeroSection />
      </div>
      <div ref={section1Ref} className={`section ${section1InView ? 'visible' : ''}`}>
        <Section1 />
      </div>
      <div ref={section2Ref} className={`section ${section2InView ? 'visible' : ''}`}>
        <Section2 />
      </div>
     <div ref={footerRef} className={`section ${footerInView ? 'visible' : ''}`}>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
