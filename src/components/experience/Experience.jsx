import { HiBriefcase, HiCalendar, HiLocationMarker, HiChevronRight } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      company: 'KajoAI Oy',
      role: 'Software Developer',
      period: 'Oct 2025 - Present',
      location: 'Helsinki, Finland',
      current: true,
      description: 'Building AI-powered document intelligence systems',
      responsibilities: [
        'Developed Python scripts and n8n workflows to automate document ingestion for RAG systems, focusing on maintaining clean code and handling data edge cases.',
        'Experimented with different chunking strategies and vector parameters to help the team improve the relevance of bot answers.',
        'Designed and tested system prompts to ensure deterministic and accurate bot responses.',
        'Implemented Microsoft Adaptive Cards to render structured, interactive UI components within Microsoft Teams.',
      ],
      technologies: ['Python', 'RAG', 'Azure', 'LLMs', 'Vector DBs'],
    },
    {
      company: 'Vesko Oy',
      role: 'Web Developer',
      period: 'Sep 2024 - Nov 2024',
      location: 'Helsinki, Finland',
      current: false,
      description: 'Frontend architecture and component development',
      responsibilities: [
        'Architected a library of 15+ reusable components using React/TypeScript, reducing development time for future features.',
        'Refactored legacy modules to modern standards, improving maintainability and reducing technical debt.',
        'Optimized responsive layouts with Tailwind CSS, improving user experiences across devices.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      company: 'Integrify Oy',
      role: 'Full Stack Developer Trainee',
      period: 'May 2022 - Oct 2022',
      location: 'Helsinki, Finland',
      current: false,
      description: 'Intensive full-stack development bootcamp',
      responsibilities: [
        'Built full-stack applications using the MERN stack in an agile environment.',
        'Collaborated in an intensive 48-hour Hackathon to prototype a travel mode detection system designed to reward eco-friendly commuting.',
        'Completed 500+ hours of intensive coding bootcamp focusing on scalable web architectures.',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
  ];

  return (
    <section id='experience' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Work Experience</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          My professional journey in software development, from trainee to building AI-powered systems.
        </p>

        <div className='max-w-6xl mx-auto space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='group relative'
            >
              {/* Large Card Design */}
              <div className='relative overflow-hidden glass rounded-3xl p-8 md:p-10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
                {/* Background Gradient Accent */}
                <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Top Section */}
                <div className='relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8'>
                  <div className='flex items-start gap-5'>
                    {/* Company Icon */}
                    <div className='p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0 shadow-lg shadow-indigo-500/25'>
                      <HiBriefcase className='w-8 h-8 text-white' />
                    </div>

                    <div>
                      <div className='flex flex-wrap items-center gap-3 mb-2'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white'>{exp.company}</h3>
                        {exp.current && (
                          <span className='px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse'>
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className='text-xl text-indigo-400 font-semibold mb-2'>{exp.role}</p>
                      <p className='text-slate-400'>{exp.description}</p>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className='flex flex-col gap-3 lg:text-right'>
                    <div className='flex items-center gap-2 text-slate-300 lg:justify-end'>
                      <HiCalendar className='w-5 h-5 text-indigo-400' />
                      <span className='font-medium'>{exp.period}</span>
                    </div>
                    <div className='flex items-center gap-2 text-slate-400 lg:justify-end'>
                      <HiLocationMarker className='w-5 h-5 text-purple-400' />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className='relative mb-8'>
                  <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>Key Achievements</h4>
                  <ul className='grid md:grid-cols-2 gap-4'>
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className='flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300'>
                        <HiChevronRight className='w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5' />
                        <span className='text-slate-300 leading-relaxed'>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className='relative'>
                  <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>Technologies Used</h4>
                  <div className='flex flex-wrap gap-3'>
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className='px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 font-medium hover:border-indigo-500/50 hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Index Number */}
                <div className='absolute bottom-6 right-8 text-8xl font-bold text-slate-800/30 select-none'>
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience