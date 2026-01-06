import image from '../../assets/suraj.jpg';
import { HiLocationMarker, HiCode, HiLightBulb, HiHeart, HiSparkles, HiChevronRight, HiTranslate } from 'react-icons/hi';

const AboutMe = () => {
  const highlights = [
    { icon: HiLocationMarker, text: 'Helsinki, Finland', color: 'from-cyan-400 to-blue-500' },
    { icon: HiCode, text: 'Software Developer', color: 'from-indigo-400 to-purple-500' },
    { icon: HiLightBulb, text: 'AI Enthusiast', color: 'from-purple-400 to-pink-500' },
    { icon: HiHeart, text: 'Lifelong Learner', color: 'from-pink-400 to-rose-500' },
  ];

  const journey = [
    'From remote Nepal to Finland tech scene',
    'Transitioned from physical labor to software development',
    'Graduated with honors while raising a family',
    'Building AI-powered systems at KajoAI',
  ];

  return (
    <section id='about' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>About Me</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          A journey of resilience, growth, and passion for technology.
        </p>

        <div className='max-w-6xl mx-auto'>
          <div className='group relative'>
            {/* Large Card Design */}
            <div className='relative overflow-hidden glass rounded-3xl p-8 md:p-10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
              {/* Background Gradient Accents */}
              <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              <div className='relative flex flex-col lg:flex-row gap-10 items-start'>
                {/* Image Section */}
                <div className='lg:w-80 flex-shrink-0 mx-auto lg:mx-0'>
                  <div className='relative group/image'>
                    {/* Gradient border effect */}
                    <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-40 group-hover/image:opacity-70 transition-opacity duration-500'></div>

                    <div className='relative'>
                      {/* Image with aspect ratio control */}
                      <div className='relative w-72 h-72 lg:w-full lg:h-96 mx-auto overflow-hidden rounded-2xl'>
                        <img
                          src={image}
                          alt='Suraj Mishra'
                          className='w-full h-full object-cover object-top shadow-2xl'
                        />
                      </div>

                      {/* Floating Badge */}
                      <div className='absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2 animate-float shadow-lg'>
                        <p className='text-2xl font-bold gradient-text'>3+</p>
                        <p className='text-slate-400 text-sm'>Years in Tech</p>
                      </div>

                      {/* Sparkle Icon */}
                      <div className='absolute -top-2 -left-2 glass rounded-lg p-2 animate-float shadow-lg' style={{ animationDelay: '1s' }}>
                        <HiSparkles className='w-5 h-5 text-yellow-400' />
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className='mt-6 glass rounded-xl p-4'>
                    <div className='flex items-center gap-2 mb-3'>
                      <HiTranslate className='w-5 h-5 text-indigo-400' />
                      <span className='text-sm font-semibold text-slate-400 uppercase tracking-wider'>Languages</span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {['Nepali', 'English', 'Finnish', 'Hindi'].map((lang, index) => (
                        <span key={index} className='px-3 py-1 text-sm rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50'>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section - Takes remaining space */}
                <div className='flex-1 space-y-6'>
                  {/* Highlight Pills */}
                  <div className='flex flex-wrap gap-2'>
                    {highlights.map((item, index) => (
                      <div
                        key={index}
                        className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300'
                      >
                        <item.icon className='w-4 h-4 text-indigo-400' />
                        <span className='text-slate-300'>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className='space-y-4 text-slate-300 leading-relaxed'>
                    <p>
                      Growing up in a remote village in Nepal, where life was defined by simplicity, I learned to value the organic side of living. Today, based in <span className='text-indigo-400 font-medium'>Helsinki</span>, I apply that grounded perspective to the digital world.
                    </p>
                    <p>
                      I am a Software Developer with a strong interest in <span className='text-purple-400 font-medium'>Generative AI</span> and modern software practices. Currently at KajoAI, I work with Python and RAG technology to build efficient systems for data retrieval and intelligent search. I enjoy the challenge of turning complex data into useful, AI-driven solutions.
                    </p>
                    <p>
                      My journey has taught me that technology is more than just code; it is a tool to create meaningful change. To maintain that focus, I make sure to step away from the screen and recharge by reading books or walking in the forest while listening to music. It keeps me grounded, clears my mind, and reminds me of the simple roots where I started.
                    </p>
                  </div>

                  {/* Journey Highlights */}
                  <div>
                    <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>My Journey</h4>
                    <div className='grid sm:grid-cols-2 gap-3'>
                      {journey.map((item, index) => (
                        <div key={index} className='flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300'>
                          <HiChevronRight className='w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5' />
                          <span className='text-slate-300'>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
