import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import siba from '../../../public/assets/siba_login_view.png'
import saas from '../../../public/assets/saas.png'
import trainers_house from '../../../public/assets/trainers_house.png'
import eshop_web from '../../../public/assets/eshop-web.png'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      image: siba,
      title: 'Softala',
      description: 'Software project for Sibelius Academy developed at Haaga-Helia',
      techStack: ['JavaScript', 'TypeScript', 'React', 'Material UI', 'Node.js', 'Express', 'MySQL'],
      liveLink: 'https://github.com/haagahelia/siba-fe',
      github: 'https://github.com/haagahelia/Siba_be'
    },
    {
      id: 2,
      image: trainers_house,
      title: 'Trainers House',
      description: 'Final project for Front-end Development course at Haaga-Helia',
      techStack: ['JavaScript', 'TypeScript', 'React', 'Material UI', 'Node.js', 'Express', 'MySQL'],
      liveLink: 'https://master--tranquil-raindrop-eaf7a3.netlify.app/',
      github: 'https://github.com/mishrasur7/trainers-house?tab=readme-ov-file'
    },
    {
      id: 3,
      image: saas,
      title: 'SAAS Project',
      description: 'A practice project for animation and SAAS style.',
      techStack: ['HTML', 'SCSS'],
      liveLink: 'https://strong-souffle-17c7a0.netlify.app/',
      github: 'https://github.com/mishrasur7/fs11-SASS/tree/sass'
    },
    {
      id: 4,
      image: eshop_web,
      title: 'E-commerce Project',
      description: 'Project work at Taitotalo',
      techStack: ['JavaScript', 'React', 'Bootstrap', 'Python', 'Django'],
      liveLink: 'https://github.com/mishrasur7/eshop-web',
      github: 'https://github.com/mishrasur7/eshop-web'
    },
  ]

  return (
    <section id='projects' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Projects</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          A selection of projects that showcase my skills and experience.
        </p>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {projectsList.map((project) => (
            <div key={project.id} className='group relative'>
              {/* Glow Effect */}
              <div className='absolute -inset-1 bg-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500'></div>

              {/* Card */}
              <div className='relative glass rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
                {/* Project Image */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent'></div>

                  {/* Overlay Actions */}
                  <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                      className='p-2 rounded-lg glass hover:bg-indigo-500/30 transition-colors duration-300'
                    >
                      <FaGithub className='w-5 h-5 text-white' />
                    </a>
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noreferrer'
                      className='p-2 rounded-lg glass hover:bg-indigo-500/30 transition-colors duration-300'
                    >
                      <HiExternalLink className='w-5 h-5 text-white' />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20'>
                      <HiCode className='w-5 h-5 text-indigo-400' />
                    </div>
                    <h3 className='text-xl font-bold text-white'>{project.title}</h3>
                  </div>

                  <p className='text-slate-400 mb-4 leading-relaxed'>{project.description}</p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 text-sm rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-indigo-500/30 transition-colors duration-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
