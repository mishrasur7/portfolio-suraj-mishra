import { HiBadgeCheck, HiCalendar, HiExternalLink, HiChevronRight } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: 'Information Technology Specialist in Python',
      issuer: 'Certiport',
      date: 'April 2025',
      icon: SiPython,
      color: 'from-yellow-400 via-blue-500 to-blue-600',
      description: 'Industry-recognized certification validating Python programming proficiency',
      skills: ['Python Fundamentals', 'Data Structures', 'Object-Oriented Programming', 'Error Handling'],
    },
  ];

  return (
    <section id='certifications' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Certifications</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          Professional certifications that validate my technical expertise.
        </p>

        <div className='max-w-6xl mx-auto space-y-8'>
          {certifications.map((cert, index) => (
            <div key={index} className='group relative'>
              {/* Large Card Design - matching Experience */}
              <div className='relative overflow-hidden glass rounded-3xl p-8 md:p-10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
                {/* Background Gradient Accent */}
                <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Top Section */}
                <div className='relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8'>
                  <div className='flex items-start gap-5'>
                    {/* Cert Icon */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} flex-shrink-0 shadow-lg shadow-blue-500/25`}>
                      <cert.icon className='w-8 h-8 text-white' />
                    </div>

                    <div>
                      <div className='flex flex-wrap items-center gap-3 mb-2'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white'>{cert.title}</h3>
                        <HiBadgeCheck className='w-7 h-7 text-green-400' />
                      </div>
                      <p className='text-xl text-indigo-400 font-semibold mb-2'>{cert.issuer}</p>
                      <p className='text-slate-400'>{cert.description}</p>
                    </div>
                  </div>

                  {/* Date & Verification */}
                  <div className='flex flex-col gap-3 lg:text-right'>
                    <div className='flex items-center gap-2 text-slate-300 lg:justify-end'>
                      <HiCalendar className='w-5 h-5 text-indigo-400' />
                      <span className='font-medium'>{cert.date}</span>
                    </div>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 lg:ml-auto'>
                      <span className='text-green-400 font-medium'>Verified</span>
                      <HiExternalLink className='w-4 h-4 text-green-400' />
                    </div>
                  </div>
                </div>

                {/* Skills Covered */}
                <div className='relative'>
                  <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>Skills Validated</h4>
                  <ul className='grid md:grid-cols-2 gap-4'>
                    {cert.skills.map((skill, sIndex) => (
                      <li key={sIndex} className='flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300'>
                        <HiChevronRight className='w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5' />
                        <span className='text-slate-300 leading-relaxed'>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
