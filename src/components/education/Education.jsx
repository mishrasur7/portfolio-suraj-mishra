import { HiAcademicCap, HiCalendar, HiLocationMarker, HiStar, HiChevronRight } from 'react-icons/hi';

const Education = () => {
  const education = [
    {
      school: 'AEL-Amiedu Oy',
      degree: 'Python Programming',
      period: 'Nov 2024 - June 2025',
      location: 'Helsinki, Finland',
      description: 'Intensive program focusing on Python and modern development practices',
      highlights: ['Python programming', 'Git version control', 'Linux systems', 'Database management'],
      gpa: '4.0',
      current: false,
    },
    {
      school: 'Haaga-Helia University of Applied Sciences',
      degree: 'Bachelor of Business Administration, Business Information Technology',
      period: 'Jan 2021 - June 2024',
      location: 'Helsinki, Finland',
      description: 'Major in Software Engineering with focus in modern development practices',
      highlights: [
        'Thesis: Software Design Principles and Architectures - a case study',
        'Recipient of Lauri Fontell Scholarship',
        'Focus on full-stack software development',
        'Agile methodologies and project management',
      ],
      gpa: '4.69',
      current: false,
    },
  ];

  return (
    <section id='education' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Education</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          Academic foundation that shaped my technical expertise and problem-solving abilities.
        </p>

        <div className='max-w-6xl mx-auto space-y-8'>
          {education.map((edu, index) => (
            <div key={index} className='group relative'>
              {/* Large Card Design - matching Experience */}
              <div className='relative overflow-hidden glass rounded-3xl p-8 md:p-10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
                {/* Background Gradient Accent */}
                <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Top Section */}
                <div className='relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8'>
                  <div className='flex items-start gap-5'>
                    {/* School Icon */}
                    <div className='p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0 shadow-lg shadow-indigo-500/25'>
                      <HiAcademicCap className='w-8 h-8 text-white' />
                    </div>

                    <div>
                      <div className='flex flex-wrap items-center gap-3 mb-2'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white'>{edu.school}</h3>
                        {edu.current && (
                          <span className='px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse'>
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className='text-xl text-indigo-400 font-semibold mb-2'>{edu.degree}</p>
                      <p className='text-slate-400'>{edu.description}</p>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className='flex flex-col gap-3 lg:text-right'>
                    <div className='flex items-center gap-2 text-slate-300 lg:justify-end'>
                      <HiCalendar className='w-5 h-5 text-indigo-400' />
                      <span className='font-medium'>{edu.period}</span>
                    </div>
                    <div className='flex items-center gap-2 text-slate-400 lg:justify-end'>
                      <HiLocationMarker className='w-5 h-5 text-purple-400' />
                      <span>{edu.location}</span>
                    </div>
                    {/* GPA Badge */}
                    <div className='flex items-center gap-2 lg:justify-end'>
                      <div className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20'>
                        <HiStar className='w-5 h-5 text-yellow-400' />
                        <span className='text-white font-bold'>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className='relative'>
                  <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>Key Highlights</h4>
                  <ul className='grid md:grid-cols-2 gap-4'>
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className='flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300'>
                        <HiChevronRight className='w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5' />
                        <span className='text-slate-300 leading-relaxed'>{highlight}</span>
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

export default Education
