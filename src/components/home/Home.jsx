const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden scroll-m-20'>
        {/* Background Effects */}
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl'></div>
        </div>

        <div className='container mx-auto px-6 pt-24 relative z-10'>
            <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
                {/* Greeting */}
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-float'>
                    <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
                    <span className='text-slate-300 text-sm'>Available for opportunities</span>
                </div>

                {/* Name */}
                <h1 className='text-5xl md:text-7xl font-bold mb-4'>
                    <span className='text-white'>Hi, I&apos;m </span>
                    <span className='gradient-text'>Suraj Mishra</span>
                </h1>

                {/* Title */}
                <p className='text-xl md:text-2xl text-slate-400 mb-8'>
                    Software Developer &bull; AI Enthusiast &bull; Problem Solver
                </p>

                {/* Description */}
                <p className='text-slate-400 max-w-2xl leading-relaxed'>
                    Building intelligent systems at the intersection of Software Engineering and Generative AI.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Home
