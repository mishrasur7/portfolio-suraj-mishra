import { HiMail, HiPhone } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'mishrasur7@gmail.com',
      href: 'mailto:mishrasur7@gmail.com',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+358 440778001',
      href: 'tel:+358440778001',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'surmishra',
      href: 'https://www.linkedin.com/in/surmishra/',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id='contact' className='py-24 scroll-m-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 gradient-text'>Get In Touch</h2>
        <p className='text-slate-400 text-center max-w-2xl mx-auto mb-16'>
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and AI.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
              className='group'
            >
              <div className='glass rounded-2xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 h-full'>
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-slate-400 text-sm mb-1'>{method.label}</h3>
                <p className='text-white font-medium'>{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <div className='glass rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>Let&apos;s Build Something Amazing</h3>
            <p className='text-slate-400 mb-6'>
              Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
            </p>
            <a
              href='mailto:mishrasur7@gmail.com'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1'
            >
              <HiMail className='w-5 h-5' />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact