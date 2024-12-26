
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
              <button className='bg-gray-300 rounded-lg p-3'>Vocational course in Python Programming | Nov 2024 - June 2025 | Helsinki, Finland</button>
              <ul>
                <li>-   Python programming, Git, Linux, Databases</li>
                <li>-   Study language - Finnish</li>
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
              <button className='bg-gray-300 rounded-lg p-3'>Bachelors Degree in Business Information Technology | Jan 2021 - June 2024 | Helsinki, Finland</button>
              <ul>
                <li>-	Major focus on programming, frontend development, backend development, database management and databases, UI/UX.</li>
                <li>-   GPA - 4.69</li>
                <li>-   Study language - English</li>
              </ul>
            </div>
          </li>
          
      </ol>
    </div>
  )
}

export default Education