import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiDjango, SiDocker, SiGit, SiMicrosoftazure, SiTailwindcss, SiExpress, } from 'react-icons/si';
import { TbDatabase, TbBrain, TbMessageChatbot, TbSearch, TbVectorBezier2, TbCoffee } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-cyan-400 to-blue-500',
      bgGlow: 'bg-cyan-500/20',
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: TbCoffee },
        { name: 'SQL', icon: TbDatabase },
      ]
    },
    {
      title: 'AI & Data',
      color: 'from-indigo-400 to-purple-500',
      bgGlow: 'bg-indigo-500/20',
      skills: [
        { name: 'LLMs', icon: TbBrain },
        { name: 'RAG', icon: TbSearch },
        { name: 'Vector DBs', icon: TbVectorBezier2 },
        { name: 'Prompt Engineering', icon: TbMessageChatbot },
        { name: 'Azure AI Search', icon: SiMicrosoftazure },
      ]
    },
    {
      title: 'Frameworks',
      color: 'from-purple-400 to-pink-500',
      bgGlow: 'bg-purple-500/20',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Django', icon: SiDjango },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ]
    },
    {
      title: 'Tools',
      color: 'from-pink-400 to-rose-500',
      bgGlow: 'bg-pink-500/20',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'Azure DevOps', icon: SiMicrosoftazure },
      ]
    },
  ];

  return (
    <section id='skills' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Skills & Technologies</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          A growing toolkit of technologies I use to build intelligent, scalable solutions.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className='group relative'>
              {/* Glow Effect */}
              <div className={`absolute -inset-1 ${category.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className='relative glass rounded-2xl p-6 h-full hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden'>
                {/* Background Gradient on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>

                {/* Category Header */}
                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} mb-6 shadow-lg`}>
                  <span className='text-white text-sm font-semibold'>{category.title}</span>
                </div>

                {/* Skills List */}
                <div className='space-y-3 relative'>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className='group/skill flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 border border-transparent hover:border-indigo-500/30 transition-all duration-300'
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 group-hover/skill:from-indigo-500/20 group-hover/skill:to-purple-500/20 transition-all duration-300`}>
                        <skill.icon className='w-5 h-5 text-slate-400 group-hover/skill:text-indigo-400 transition-colors duration-300' />
                      </div>
                      <span className='text-slate-300 group-hover/skill:text-white transition-colors duration-300 font-medium'>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
