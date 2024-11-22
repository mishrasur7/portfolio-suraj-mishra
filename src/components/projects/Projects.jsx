import siba from '../../assets/siba_login_view.png'

const Projects = () => {
  const projectsList = [
    {
      id: 1, 
      image: siba, 
      title: 'Project 1', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
  ]
  return (
    <section className='bg-[#0d1]'>
      {projectsList.map(projects => {
        <div key={projects.id}>
          <img src={projects.image} alt={projects.title} />
          <h3>{projects.title}</h3>
          <p className='text-white'>{projects.description}</p>
        </div>
      })}

    </section>
  )
}

export default Projects