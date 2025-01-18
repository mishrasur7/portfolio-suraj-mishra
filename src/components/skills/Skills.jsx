import './skills.css'

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'Java',
    'Python',
    'React',
    'Redux',
    'Express',
    'Material UI',
    'Tailwind CSS',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'Jira'
  ];

 return (
  <div id='skills' className='mx-5 mt-24 scroll-m-20'>
    <h1 className='text-2xl text-center text-[#6D83F2] font-mono mb-10 '>Skills</h1>
    <div className='rounded-xl p-4 bg-blue-500 relative overflow-hidden h-96 shadow-lg'>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='skill absolute text-white font-bold text-xl'
          style={{
            animationDuration: `${3 + Math.random() * 5}s`, 
            animationDelay: `${Math.random() * 2}s`, 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`, 
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Skills;