import Navbar from "../navbar/Navbar"
import CV from '../../assets/CV_mishra_suraj.pdf'

export const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
    <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600
    via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'>
    </div>
    <Navbar />
    <section className='text-white body-font z-10'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
            mb-16 md:mb-0 items-center text-center relative'>
                <h1 className='title-font sm:text-4xl text-4xl font-bold text-white'>Hi! I&apos;m Suraj Mishra</h1>
                <p className='my-5 leading-relaxed'>I am a passionate Software Developer.</p>
                <div className='flex justify-center'>
                    <a href={CV}>
                        <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg'>
                            Download CV
                        </button>
                    </a>

                </div>
            </div>

        </div>

    </section>
    </div>
  )
}
