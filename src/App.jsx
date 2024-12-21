import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/home';
import Programs from './Components/Programs/program';
import About from './Components/about/about';
import Campus from './Components/campus/campus';
import StudentReview from './Components/review/review';
import ContactForm from './Components/contact/contact';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Programs />
      <About/>
      <Campus/>
      <StudentReview/>
      <ContactForm/>
    </>
  );
};

export default App;
