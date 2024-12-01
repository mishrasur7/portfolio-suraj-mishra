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
            <div key={project.id} className=' bg-[#6A98F0] hover:bg-yellow-500 hover:cursor-pointer rounded-xl p-4'>
              <img src={project.image} alt={project.title} className='w-72 h-48'/>
              <div className='text-white mt-5'>
                <h3 className='text-xl font-bold'>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Projects