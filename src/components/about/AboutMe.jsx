import image from '../../assets/suraj.jpg';

const AboutMe = () => {
  return (
    <div id='about' className='mt-24 scroll-m-20'>
        <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>About me</h1>
    <section className= 'flex flex-col gap-10 mx-4 rounded-xl p-4 sm:flex-row sm:place-content-around bg-gradient-to-r from-sky-500 via-blue-300 to-yellow-200'>
        <div className='h-96 w-96 flex items-center justify-center'>
            <img src={image} alt='suraj' className='h-96 w-96' />
        </div>
        <div className='sm:w-[700px] italic'>
          <p>I spent my early 16 years of my life in rural village of Nepal, where I completed my school level education. That time was totally different if we compare it now. We had no computers, no telephones, no electricity, no motor vehicles. 
            Life was fully organic and natural. I saw computer for the first time when I moved to capital city Kathmandu for higher secondory education.
          </p>
          <br />
          <p>I came to Finland in 2010 for a study purpose. It was a dream come true for me. I was very happy to come here and enjoyed most of the things.
            I completed my study in 2015. During this time, I worked very hard in physically demanding jobs, covering all of my expences and supporting family back home in Nepal. 
            I decided to stay in Finland and continued working. I acheived some sort of financial satisfaction but I felt that something is missing.
          </p>
          <br />
          <p>
            I started remembering my old school days, teachers, and friends. I used to be a outstanding student of my class. People used to say that I will do something meaningful in future. 
            What I was doing that time was not very meaningful. After that, many different thoughts started coming into my mind one after another. Finally, I decided to stop working too much and started studying IT from 2021. 
          </p>
          <br />
          <p>
            This time, I really enjoyed what I chose to study. I liked programming, web application development, and databases. I graduated in June 2024 with Lauri Fontell Scholorship for excellent academic performance. Currently, I am learning Python at Taitotalo.
          </p>
          <br />
          <b>Software development is the field where I want to grow technically and professionally. 
            It gives me both happiness and satisfaction. This is the area where I can contribute something meaningful to people and society. 
          </b>
        </div>
    </section>
    </div>
  )
}

export default AboutMe