import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
