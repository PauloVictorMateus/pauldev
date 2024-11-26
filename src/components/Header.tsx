import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PaulDev</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-4">
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-gray-600 dark:hover:text-gray-400">Sobre</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-gray-600 dark:hover:text-gray-400">Habilidades</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-600 dark:hover:text-gray-400">Projetos</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-gray-600 dark:hover:text-gray-400">Contato</a></li>
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li><a onClick={(e) => scrollToSection(e, 'about')} href="#about" className="block py-2 hover:text-gray-600 dark:hover:text-gray-400">Sobre</a></li>
            <li><a onClick={(e) => scrollToSection(e, 'skills')} href="#skills" className="block py-2 hover:text-gray-600 dark:hover:text-gray-400">Habilidades</a></li>
            <li><a onClick={(e) => scrollToSection(e, 'projects')} href="#projects" className="block py-2 hover:text-gray-600 dark:hover:text-gray-400">Projetos</a></li>
            <li><a onClick={(e) => scrollToSection(e, 'contact')} href="#contact" className="block py-2 hover:text-gray-600 dark:hover:text-gray-400">Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
