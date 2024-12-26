
const Experience = () => {
  return (
    <div id='experience' className='mt-24 scroll-m-20'>
        <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>Experience</h1>
         <ol className='border-l-2 mx-4 sm:mx-48'>
          {/* <!--First item--> */}
          <li>
            <div className='flex-start flex items-center pt-3'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
              <h1 className='text-xl font-bold text-[#6D83F2]'>Vesko Ltd</h1>
            </div>
            <div className='mb-6 ml-4 mt-2'>
              <button className='bg-gray-300 rounded-lg p-3'>Web Developer Intern | Oct 2024 - Present | Remote</button>
              <ul>
                <li>-   Implementing features, components, and UI layouts with React TypeScript. </li>
                <li>-	Migrated code from old codebase into new one, resulting in better management of component structure, features, and functionalities.</li>
                <li>-	Reduced development complexity for responsiveness and cross browser performance by 20% transitioning from Material UI to Tailwind CSS. </li>
              </ul>
            </div>
          </li>
          {/* <!--Second item--> */}
           <li>
            <div className='flex-start flex items-center pt-3'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
              <h1 className='text-xl font-bold text-[#6D83F2]'>Integrify Oy</h1>
            </div>
            <div className='mb-6 ml-4 mt-2'>
              <button className='bg-gray-300 rounded-lg p-3'>Full Stack Developer Trainee | May 2022 - Oct 2022 | Helsinki, Finland</button>
              <ul>
                <li>-	Acquired in-depth knowledge and hands-on experience in full-stack web development, utilizing React, Redux, Express, Node, & MongoDB.</li>
                <li>-	Actively engaged in daily problem-solving exercises, while effectively collaborating and communicating with a diverse team of developers. </li>
              </ul>
            </div>
          </li>
          
      </ol>
    </div>
  )
}

export default Experience