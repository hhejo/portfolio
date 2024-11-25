import { useEffect } from 'react';
import { Header, Masthead, AboutMe, Skills, Projects, Career } from './articles';

// import Header from './articles/Header';
// import Masthead from './articles/Masthead';
// import AboutMe from './articles/AboutMe';
// import Skills from './articles/Skills';
// import Projects from './articles/Projects';
// import Career from './articles/Career';

function App() {
  useEffect(() => {
    // library.add(faCamera);
  }, []);

  return (
    <>
      <Header />
      <Masthead />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
    </>
  );
}

export default App;
