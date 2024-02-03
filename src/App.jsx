import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Clients, StarsCanvas, Faq, Foot } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className='relative z-1'>
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <div className='relative z-0'>
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Experience />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Faq />
          <Clients />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <Foot />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
