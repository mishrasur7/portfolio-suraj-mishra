import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-800 py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Logo & Tagline */}
          <div className='text-center md:text-left'>
            <a href='#' className='flex items-center gap-2 justify-center md:justify-start'>
              <div className='w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>S</span>
              </div>
              <span className='text-xl font-bold gradient-text'>Suraj</span>
            </a>
            <p className='text-slate-500 text-sm mt-2'>
              Roots in Nepal, Growth in Finland. 
            </p>
          </div>

          {/* Copyright */}
          <div className='flex items-center gap-2 text-slate-500 text-sm'>
            <span>Made with</span>
            <HiHeart className='w-4 h-4 text-red-500 animate-pulse' />
            <span>&copy; {currentYear} Suraj Mishra</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
