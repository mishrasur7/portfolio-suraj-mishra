
const Skills = () => {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div
            data-aos='fade-up'
            data-aos-delay='200'
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-50'>
                <h1 
                data-aos='fade-right'
                data-aos-delay='500'
                className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white'>
                    Skills
                </h1>
                <p
                data-aos='fade-right'
                data-aos-delay='500' 
                className='leading-relaxed text-base'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis molestias 
                  exercitationem earum officia aliquam eaque quos sit optio, harum, minima unde quidem? 
                  Illum cumque tenetur corrupti. Quas neque accusantium est rerum reprehenderit id atque 
                  fugiat aliquid inventore perferendis aperiam sunt veniam, voluptas sit distinctio 
                  aliquam facilis earum assumenda dolorum repellendus!
                </p>
            </div>
            <div data-aos='fade-right' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
              <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                  <img src={} alt='javascript' className='rounded-full w-24 h-24 object-cover'/>
                </li>
              </nav>
            </div>

        </div>

    </section>
  )
}

export default Skills