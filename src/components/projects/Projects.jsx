import siba from '../../assets/siba_login_view.png'

const Projects = () => {
  const projectsList = [
    {
      id: 1, 
      image: siba, 
      title: 'Softala Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      id: 1, 
      image: siba, 
      title: 'Softala Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      id: 1, 
      image: siba, 
      title: 'Softala Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
     {
      id: 1, 
      image: siba, 
      title: 'Softala Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      id: 1, 
      image: siba, 
      title: 'Softala Project', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
  ]
  return (
    <div id='projects' className='mt-24 scroll-m-20'>
      <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>Projects</h1>
      <section className='mx-4 flex flex-wrap gap-10 justify-evenly sm:flex-row '>
        {projectsList.map((project) => {
          return (
            <div key={project.id} className='p-10 border-solid border-[#6D83F2] border-b-2 border-l-2 hover:cursor-pointer rounded-xl'>
              <img src={project.image} alt={project.title} className='w-96 h-48'/>
              <div className='text-[#6D83F2] mt-5'>
                <h3 className='text-xl font-bold'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex flex-row justify-around pt-5'>
                  <button>Visit GitHub</button>
                  <button>Live Demo</button>
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