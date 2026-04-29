import Image from "next/image";
const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/samuel_v3.png'} 
    /* <Image src={'/samuel.jpg'}  */
      width={737} 
      height={678} 
      alt=""
      className="translate-z0 w-full h-full object-contain object-top" 
    />
    </div>;
};

export default Avatar;
