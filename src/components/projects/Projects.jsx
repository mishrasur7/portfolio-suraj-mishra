import siba from '../../assets/siba_login_view.png'
import saas from '../../assets/saas.png'
import trainers_house from '../../assets/trainers_house.png'

const Projects = () => {
  const projectsList = [
    {
      id: 1, 
      image: siba, 
      title: 'Softala', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      techStack: ['JavaScript', 'TypeScript', 'React', 'Material UI', 'Node.js', 'Express', 'MySQL'],
      liveLink: 'https://github.com/haagahelia/siba-fe',
      github: ['https://github.com/haagahelia/Siba_be']

    },
    {
      id: 2, 
      image: trainers_house, 
      title: 'Trainers House', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      techStack: ['JavaScript', 'TypeScript', 'React', 'Material UI', 'Node.js', 'Express', 'MySQL'],
      liveLink: 'https://master--tranquil-raindrop-eaf7a3.netlify.app/',
      github: ['https://github.com/mishrasur7/trainers-house?tab=readme-ov-file']
    },
     {
      id: 3, 
      image: saas, 
      title: 'SAAS Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      techStack: ['HTML', 'SCSS'],
      liveLink: 'https://strong-souffle-17c7a0.netlify.app/',
      github: ['https://github.com/mishrasur7/fs11-SASS/tree/sass']
    },
  ]

  const handleClick = (link) => {
    window.location.href = link
  }

  return (
    <div id='projects' className='mt-24 scroll-m-20'>
      <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>Projects</h1>
      <section className='mx-4 flex flex-wrap gap-10 justify-evenly sm:flex-row '>
        {projectsList.map((project) => {
          return (
            <div 
            onClick={() => handleClick(project.liveLink)}
            key={project.id} 
            className='flex-initial w-96 p-7 border-solid border-[#6D83F2] border-b-2 border-l-2 hover:cursor-pointer rounded-xl'>
              <img src={project.image} alt={project.title} className='w-72 h-36'/>
              <div className='text-[#6D83F2] mt-5'>
                <h3 className='text-xl font-bold'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='mt-5'>
                  <p><b>Tech Stack: </b>{project.techStack.map(tech => <span key={project.id}>{tech} | </span>)}</p>
                </div>
                <div className='flex flex-row justify-around mt-5'>
                  <a href={project.github.map((link) => link)} target='_blank'>
                    <button className='bg-[#6D83F2] text-white px-6 py-2 rounded-xl font-mono text-sm'>Source Code</button>
                  </a>
                  <a href={project.liveLink} target='_blank'>
                    <button className='bg-[#6D83F2] text-white px-6 py-2 rounded-xl font-mono text-sm'>Live</button>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Projects