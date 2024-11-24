const Navbar = () => {
    const navBarList = [
        {name: 'home', link: '#home'},
        {name: 'about me', link: '#about'},
        {name: 'projects', link: '#projects'},
        {name: 'experience', link: '#experience'},
        {name: 'contact', link: '#contact'},
    ]; 

  return (
    <header className= 'bg-gray-50 border-b-2 fixed top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex flex-wrap justify-between p-5 items-center font-thin text-[#6A98F0]'>
            <a href="#" className='font-mono hover:font-bold hover:text-xl'>&lt;SurajMishra/&gt;</a>
            <nav className= 'flex flex-wrap gap-10'>
                {
                    navBarList.map((item, index) => (
                        <a key={index} href={item.link} className='hover:text-black hover:text-lg'>
                            {item.name}
                        </a>
                    ))
                }
            </nav>
        </div>
    </header>
  )
}

export default Navbar