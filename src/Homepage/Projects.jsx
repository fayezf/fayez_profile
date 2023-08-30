import SectionSubTitle from "../Components/SectionSubTitle";
import { Tilt } from 'react-tilt'

import { FaArrowCircleRight } from "react-icons/fa";
const Projects = () => {
 const projects = [
    {
        image: 'https://i.ibb.co/cJbVJsH/jerins-parlour.png',
        link: 'https://jerins-parlour-f2780.web.app/'
    },
    {
        image: 'https://i.ibb.co/rdVvqSV/job-hunting.png',
        link: 'https://job-hunting-8d71c.web.app/'
    },
    {
        image: 'https://i.ibb.co/Jv2BJjn/martial-arts.png',
        link: 'https://martial-arts-69e3f.web.app/'
    },
    {
        image: 'https://i.ibb.co/J75tGhB/kid-toy.png',
        link: 'https://education-learning-toys.web.app/'
    },
    {
        image: 'https://i.ibb.co/k0p4ppw/chef-hunter.png',
        link: 'https://chef-hunter-client-6efb9.web.app/'
    },
    {
        image: 'https://i.ibb.co/HGxHjBJ/job-hunter.png',
        link: 'http://joyous-morning.surge.sh/'
    },
    {
        image: 'https://i.ibb.co/6PxZRNn/ai-universe.png',
        link: 'https://unequaled-art.surge.sh/'
    },
 ]
return (
<>
<SectionSubTitle text="Featured projects" />
<div className="container-primary upsetShadow pb-10" data-aos="fade-up" id="projects">
    <div data-aos="flip-up" data-aos-duration={1200}>
        <h2 className="text-3xl text-center my-5 border py-3 bg-white text-[#1f1f1f] inter font-bold"><span className="text-7xl">10+</span> completed projects_</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
        
         
{
    projects.map((project, index) => <div key={index} className="shadow-lg ">
    <Tilt  

    style={{ height: '100%', width: '75%', margin: 'auto', position: 'relative'}}>

      <img className=" longImg h-[270px] xl:h-[320px] " src={project.image} alt="" />
     
     <a href={project.link} rel="noreferrer" target="_blank" className=" text-lg text-blue-600 absolute bottom-2 text-stroke left-2 inter tracking-wider border-b-2 border-blue-500"> Preview <FaArrowCircleRight className="inline"/></a>
    
    </Tilt>
    </div>)
}
</div>
</div>
</>
);
};
export default Projects;