import image from '../../assets/suraj.jpg';

const AboutMe = () => {
  return (
    <div className='mt-24'>
        <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>About me</h1>
    <section className= 'flex flex-col gap-10 mx-4 rounded-xl p-4 sm:flex-row sm:place-content-around bg-gradient-to-r from-sky-500 via-blue-300 to-yellow-200'>
        <div className='h-96 w-96 flex items-center justify-center'>
            <img src={image} alt='suraj' className='h-96 w-96' />
        </div>
        <div className='flex flex-initial sm:w-[500px] items-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit molestiae laborum aspernatur, mollitia modi? Autem tenetur culpa quam debitis inventore doloremque provident sapiente minima maxime rerum quaerat dolores dolorem officia vel deleniti, dolorum possimus asperiores officiis reiciendis enim? Quis, iusto at. Voluptas soluta quis consequuntur, dignissimos accusamus expedita iure dolores laudantium! Dolore sapiente tenetur esse molestiae rerum vero mollitia sunt iusto eligendi obcaecati, ab animi sequi impedit sed ad, dolores assumenda autem veniam soluta nam repellat. Doloribus voluptates error laborum eligendi consequuntur! Hic possimus, ipsam fuga illum asperiores optio saepe officia quos in, quod fugiat nam obcaecati. Sunt, nihil.</div>
    </section>
    </div>
  )
}

export default AboutMe