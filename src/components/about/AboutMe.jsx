import image from '../../assets/suraj.jpg';

const AboutMe = () => {
  return (
    <div id='about' className='mt-24 scroll-m-20'>
        <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>About me</h1>
    <section className= 'flex flex-col gap-10 mx-4 rounded-xl p-4 sm:flex-row sm:place-content-around bg-gradient-to-r from-sky-500 via-blue-300 to-yellow-200'>
        <div className='h-96 w-96 flex items-center justify-center'>
            <img src={image} alt='suraj' className='h-96 w-96' />
        </div>
        <div className='flex flex-initial sm:w-[500px] items-center justify-center'>
          <p>I spent my early 16 years of my life in rural village of Nepal, where I completed my school level education. That time was totally different if we compare it now. We had no computers, no telephones, no electricity, no motor vehicles. Life was fully organic and natural.</p>
        </div>
    </section>
    </div>
  )
}

export default AboutMe