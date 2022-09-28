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
    <header className='bg-slate-500 py-5 fixed w-full z-[100] top-0'>
      <nav className='container flex justify-between'>
        <button onClick={toggleTheme}>toggle</button>
        <Hamburger
          className={`${toggle ? 'opened' : ''} md:hidden`}
          onClick={() => setToggle(!toggle)}
        />
        <div
          // make custom class transition-position
          className={`${
            toggle ? 'active' : ''
          } flex flex-col w-[100vw] absolute -right-[100vw] transition-all duration-700 top-[70px] text-2xl bg-slate-500 py-10 h-screen gap-5 items-center md:flex md:static md:flex-row md:w-fit md:p-0 md:transition-none md:h-fit md:text-base`}
        >
          {links.map(({ text, href }) => (
            <Link href={href}>{text}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
