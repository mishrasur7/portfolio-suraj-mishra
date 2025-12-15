import { HiBookOpen, HiLightBulb, HiChat } from 'react-icons/hi';

const Books = () => {
  const books = [
      {
      title: 'Atomic Habits',
      author: 'James Clear',
      quote: 'You do not rise to the level of your goals. You fall to the level of your systems.',
      insight: 'Small, consistent improvements compound over time to create remarkable results.',
      color: 'from-emerald-400 to-teal-500',
    },
      {
      title: 'Mayur Times',
      author: 'Narayan Wagle',
      quote: 'The city has its own rhythm, and we are all just trying to find our beat.',
      insight: 'Urban life shapes our identities in unexpected ways, blending tradition with modernity.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Palpasa Cafe',
      author: 'Narayan Wagle',
      quote: 'Love is the only truth; everything else is just a dream.',
      insight: 'Art and love can flourish even amidst chaos and conflict, reminding us of our shared humanity.',
      color: 'from-rose-400 to-pink-500',
    },
    {
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      quote: 'Change might not be fast and it isn\'t always easy. But with time and effort, almost any habit can be reshaped.',
      insight: 'Understanding the habit loop (cue, routine, reward) gives us the power to transform our behaviors.',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section id='books' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Books I Love</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          Reading shapes my thinking. Here are some books that have influenced my perspective.
        </p>

        <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
          {books.map((book, index) => (
            <div key={index} className='group relative'>
              {/* Glow Effect */}
              <div className='absolute -inset-1 bg-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500'></div>

              {/* Card */}
              <div className='relative glass rounded-2xl p-6 h-full hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10'>
                {/* Background Gradient on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${book.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>

                {/* Book Header */}
                <div className='relative flex items-start gap-4 mb-5'>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${book.color} flex-shrink-0 shadow-lg`}>
                    <HiBookOpen className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-1'>{book.title}</h3>
                    <p className='text-indigo-400 font-medium'>{book.author}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className='relative mb-4 p-4 rounded-xl bg-slate-800/30'>
                  <HiChat className='w-5 h-5 text-purple-400 mb-2' />
                  <p className='text-slate-300 italic leading-relaxed'>"{book.quote}"</p>
                </div>

                {/* Insight */}
                <div className='relative flex items-start gap-3'>
                  <HiLightBulb className='w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5' />
                  <p className='text-slate-400 leading-relaxed'>{book.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
