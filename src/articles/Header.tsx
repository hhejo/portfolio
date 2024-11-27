import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="h-16 w-full flex justify-between items-center px-8">
        <a href="/" className="text-xl font-bold text-gray-900">
          HHEJO'S PORTFOLIO
        </a>

        <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
          <a href="#">ABOUT ME</a>
          <a href="#">SKILLS</a>
          <a href="#">PROJECTS</a>
          <a href="#">CAREER</a>
        </nav>

        <nav className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <></> : <FontAwesomeIcon icon={faBars} size="xl" />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="sm:hidden flex flex-col gap-3 items-center w-full text-xl text-gray-700">
          <a href="#">ABOUT ME</a>
          <a href="#">SKILLS</a>
          <a href="#">PROJECTS</a>
          <a href="#">CAREER</a>
        </div>
      )}
    </>
  );
}
