
const Education = () => {
  return (
    <div id='education' className='mt-24 scroll-m-20'>
        <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>Education</h1>
         <ol className='border-l-2 mx-4 sm:mx-48'>
          {/* <!--First item--> */}
          <li>
            <div className='flex-start flex items-center pt-3'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
              <h1 className='text-xl font-bold text-[#6D83F2]'>Taitotalo</h1>
            </div>
            <div className='mb-6 ml-4 mt-2'>
              <div className='bg-gray-300 rounded-lg p-3'>Vocational course in Python Programming | Nov 2024 - June 2025 | Helsinki, Finland</div>
              <ul>
                <li>-   Python programming, Git, Linux, Databases</li>
              </ul>
            </div>
          </li>
          {/* <!--Second item--> */}
           <li>
            <div className='flex-start flex items-center pt-3'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
              <h1 className='text-xl font-bold text-[#6D83F2]'>Haaga-Helia University of Applied Sciences</h1>
            </div>
            <div className='mb-6 ml-4 mt-2'>
              <div className='bg-gray-300 rounded-lg p-3'>Bachelor&apos;s Degree in Business Information Technology | Jan 2021 - June 2024 | Helsinki, Finland</div>
              <ul>
                <li>-	Major focus on programming, frontend development, backend development, database management and databases, UI/UX.</li>
                <li>-   GPA - 4.69</li>
              </ul>
            </div>
          </li>
          {/* <!--Third item--> */}
           <li>
            <div className='flex-start flex items-center pt-3'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
              <h1 className='text-xl font-bold text-[#6D83F2]'>Arcada University of Applied Sciences</h1>
            </div>
            <div className='mb-6 ml-4 mt-2'>
              <div className='bg-gray-300 rounded-lg p-3'>Bachelor of Engineering in Plastic Technology | Sep 2010 - Sep 2015 | Helsinki, Finland</div>
              <ul>
                <li>-	CAD, Master CAM, Composites, Mould Design, Mathematics, Physics, Material Analysis, Thermodynamics, Mechanics, Fluid Dynamics</li>
                <li>-   GPA - 2.93</li>
              </ul>
            </div>
          </li>
          
      </ol>
    </div>
  )
}

export default Education