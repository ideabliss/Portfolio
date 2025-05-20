import React from 'react';
import Banner from '../Components/Banner';
import CustomCursor from '../Components/CustomCursor';
import Stack from '../Components/Stack';
import RecentWork from '../Components/RecentWork';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

const Home = () => {
  return (
    <div>
        <CustomCursor/>
      <Banner />
      <Stack />
      <RecentWork />
      <Projects />
      <Contact />


      {/* Additional Sections (Placeholder) */}
     
    </div>
  );
};

export default Home;
