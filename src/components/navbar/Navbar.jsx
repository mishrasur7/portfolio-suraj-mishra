import { useState } from 'react';
import { HiMenu, HiX, HiHome, HiUser, HiCode, HiAcademicCap, HiBriefcase, HiBookOpen, HiMail, HiSun, HiMoon } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navBarList = [
        {name: 'Home', link: '#home', icon: HiHome},
        {name: 'About', link: '#about', icon: HiUser},
        {name: 'Skills', link: '#skills', icon: HiCode},
        {name: 'Experience', link: '#experience', icon: HiBriefcase},
        {name: 'Education', link: '#education', icon: HiAcademicCap},
        {name: 'Books', link: '#books', icon: HiBookOpen},
        {name: 'Contact', link: '#contact', icon: HiMail},
    ];

  return (
    <>
      {/* Fixed Theme Toggle - Upper Right Corner (Desktop) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className='hidden lg:flex fixed top-6 right-6 z-50 p-3 rounded-xl glass hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110'
        aria-label='Toggle theme'
      >
        {darkMode ? (
          <HiSun className='w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors' />
        ) : (
          <HiMoon className='w-6 h-6 text-slate-400 hover:text-indigo-400 transition-colors' />
        )}
      </button>

      {/* Desktop Sidebar */}
      <aside className='hidden lg:flex fixed left-0 top-0 h-screen w-20 hover:w-64 glass flex-col justify-between py-8 z-50 transition-all duration-300 group/sidebar'>
        {/* Logo */}
        <div className='px-4'>
          <a href="#" className='flex items-center gap-3'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0'>
              <span className='text-white font-bold text-xl'>S</span>
            </div>
            <span className='text-xl font-bold text-white opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              Suraj
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className='flex-1 flex flex-col justify-center px-4 gap-2'>
          {navBarList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='group flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-500/20 transition-all duration-300'
            >
              <item.icon className='w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors flex-shrink-0' />
              <span className='text-slate-300 group-hover:text-white opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 whitespace-nowrap'>
                {item.name}
              </span>
              <span className='absolute left-20 px-3 py-1 rounded-lg bg-slate-800 text-white text-sm opacity-0 group-hover:opacity-100 lg:group-hover/sidebar:opacity-0 transition-opacity pointer-events-none'>
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className='px-4 flex flex-col gap-2'>
          <a
            href='https://github.com/mishrasur7'
            target='_blank'
            rel='noreferrer'
            className='group flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-500/20 transition-all duration-300'
          >
            <FaGithub className='w-6 h-6 text-slate-400 group-hover:text-white transition-colors flex-shrink-0' />
            <span className='text-slate-300 group-hover:text-white opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 whitespace-nowrap'>
              GitHub
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/surmishra/'
            target='_blank'
            rel='noreferrer'
            className='group flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-500/20 transition-all duration-300'
          >
            <FaLinkedin className='w-6 h-6 text-slate-400 group-hover:text-white transition-colors flex-shrink-0' />
            <span className='text-slate-300 group-hover:text-white opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 whitespace-nowrap'>
              LinkedIn
            </span>
          </a>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className='lg:hidden glass fixed top-0 left-0 w-full z-50'>
        <div className='flex justify-between items-center px-6 py-4'>
          <a href="#" className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>S</span>
            </div>
            <span className='text-xl font-bold text-white'>Suraj</span>
          </a>

          <div className='flex items-center gap-2'>
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className='p-2 rounded-xl hover:bg-indigo-500/20 transition-colors'
            >
              {darkMode ? (
                <HiSun className='w-6 h-6 text-yellow-400' />
              ) : (
                <HiMoon className='w-6 h-6 text-slate-400' />
              )}
            </button>

            <button
              className='text-white text-2xl p-2 rounded-xl hover:bg-indigo-500/20 transition-colors'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className='glass border-t border-indigo-500/20 px-6 py-4'>
            <div className='flex flex-col gap-2'>
              {navBarList.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className='flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-500/20 transition-all duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className='w-5 h-5 text-indigo-400' />
                  <span className='text-slate-300'>{item.name}</span>
                </a>
              ))}
            </div>
            <div className='flex gap-4 mt-4 pt-4 border-t border-slate-700/50'>
              <a
                href='https://github.com/mishrasur7'
                target='_blank'
                rel='noreferrer'
                className='p-3 rounded-xl glass hover:bg-indigo-500/20 transition-colors'
              >
                <FaGithub className='w-5 h-5 text-slate-400' />
              </a>
              <a
                href='https://www.linkedin.com/in/surmishra/'
                target='_blank'
                rel='noreferrer'
                className='p-3 rounded-xl glass hover:bg-indigo-500/20 transition-colors'
              >
                <FaLinkedin className='w-5 h-5 text-slate-400' />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

export default Navbar
