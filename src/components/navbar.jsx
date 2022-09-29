import { NavItem, Hamburger } from './navitem.jsx';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { text: 'About', href: '/' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'CV', href: '/#cv' },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleTheme = () => {
    localStorage.theme === 'dark'
      ? (localStorage.theme = 'light') &&
        document.documentElement.classList.remove('dark')
      : (localStorage.theme = 'dark') &&
        document.documentElement.classList.add('dark');
  };
  return (
    <header className='bg-slate-500 py-5 fixed w-full top-0'>
      <nav className='container flex justify-between'>
        <button className='z-[100]' onClick={toggleTheme}>
          toggle
        </button>
        <Hamburger
          className={`${toggle ? 'opened' : ''} z-[100] md:hidden`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? 'active' : ''
          } flex flex-col absolute translate-y-[-100vh] transition-transform duration-700 right-0 left-0 top-[70px] text-2xl bg-slate-500 py-10 gap-5 items-center md:flex md:static md:flex-row md:w-fit md:p-0 md:transition-none md:h-fit md:text-base md:translate-y-0`}
        >
          {links.map(({ text, href }) => (
            <Link href={href}>
              <a onClick={() => setToggle(false)}>{text}</a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
