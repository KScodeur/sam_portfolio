import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/samuelkinho'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/KScodeur'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
