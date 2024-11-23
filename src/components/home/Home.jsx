import { FaGithub, FaLinkedin } from "react-icons/fa";
import CodeCard from "./CodeCard"
import resume from '../../assets/CV_mishra_suraj.pdf'

const Home = () => {
  return (
    <section className='flex flex-col gap-20 mt-44 ml-6 sm:flex-row sm:ml-20 sm:place-content-around'>
        <section className='leading-10 p-4'>
            <div>
                <p className='font-mono'>Hello, I&apos;m</p>
                <p className='text-5xl font-black'>Suraj Mishra</p>
                <p>Junior Software Developer</p>
                <a href={resume} download>
                    <button className='bg-[#6A98F0] text-white px-6 py-2 rounded-xl font-mono text-sm'>Download resume</button>
                </a>
            </div> 
            <div className='flex place-content-start gap-6 mt-4'>
                <a href='https://github.com/mishrasur7' target='_blank'><FaGithub className='w-6  h-6 text-[#6A98F0]'/></a>
                <a href='https://www.linkedin.com/in/surmishra/' target='_blank'><FaLinkedin className='w-6 h-6 text-[#6A98F0]'/></a>
            </div>
        </section>
         <section>  
            <CodeCard />      
        </section>
    </section>
  )
}

export default Home