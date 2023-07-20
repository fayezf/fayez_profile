
import { useRef } from 'react';
import Button from '../Components/Button';
import profile from '../assets/profile.png'
import resume from '../assets/fayez-resume.docx.pdf'
import { useEffect } from 'react';
import Typed from 'typed.js';

const Banner = () => {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
      const typed = useRef(null);
  
    useEffect(() => {
      const options = {
          strings: 
              ['React.js', 'CSS3', 'Tailwind', 'JavaScript', 'JWT', 'Node.js', 'Express','MongoDB', 'Next.js' ], cursorChar: '_',
        
        typeSpeed: 60,
          backSpeed: 60,
          loop: true,
        
      };
      
      typed.current = new Typed(el.current, options);
        
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])

return (
<div className="container-primary" id="home">
    <div className="flex flex-col md:flex-row justify-between items-start">
        <aside data-aos="slide-right">
        <h1 className="text-6xl tracking-widest font-bold" title='Md Fayez Ahammed'>MFA</h1>
    <p className="text-lg tracking-[1.4em]">FAYEZ</p>
        </aside>
        <aside className='ml-auto hidden md:block' data-aos="slide-left">
            <p className="text-sm md:text-md font-semibold leading-5 tracking-widest mt-3"> &lt; MERN <br /> stack developer. /&gt;</p>
        </aside>
    </div>
<div className="flex justify-center items-center flex-col"> 
<div className='mt-5 bg-gray-700 md:-mt-16 rounded-2xl inline-block'>
    <img className='w-40 md:w-64' src={profile} alt="" />
</div>


<p className="text-md font-thin tracking-widest text-center w-5/6 mt-2 mx-auto">Hello, this is <span className="font-bold text-lg tracking-[0.3em]">FAYEZ</span>. A passionate web developer from <span className='font-bold text-transparent bg-gradient-to-br bg-gradient-radial from-green-500 to-red-500 bg-clip-text'>Bangladesh.</span><br />
I am curious about <br /> <span ref={el}>React.js</span>
</p>
<span className='mt-5'>
<a href={resume} download>
<Button text='My resume'/>
</a>
</span>
</div>
     </div>
);
};
export default Banner;