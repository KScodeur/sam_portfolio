import Image from "next/image";

import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'


const ProjectsBtn = () => {
  const cvLink = "https://drive.google.com/file/d/1uNphkFEd3or_bE-o4vw37MqCz5EX4htv/view?usp=drive_link";
  
  return <div className="mx-auto xl:mx-0">
    <Link
      href={cvLink}
      target='_blank'
      rel='noopener noreferrer'
      className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group ">
      <Image
        src={'/rounded-text-cv.png'}
        width={200}
        height={200}
        alt=""
        className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
      />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 
        transition-all  duration-300"/>
    </Link>
  </div>;
};

export default ProjectsBtn;
