// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Circles from "../../components/Circles";
import Avatar  from "../../components/Avatar";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import { useState } from "react";

// hooks
import { useLanguage } from '../../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const aboutData = [
    {
      title: t('about.tab_skills'),
      info: [
        {
          title: t('about.skills_webdev'),
          icons: [
            // eslint-disable-next-line react/jsx-key
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3"/>,
            <FaJs key="js"/>,
            <FaReact key="react"/>,
            <SiNextdotjs key="nextjs"/>,
            <SiFramer key="framer"/>,
            <FaWordpress key="wordpress"/>,
          ],
        },
        {
          title: t('about.skills_uiux'),
          icons: [<FaFigma key="figma"/>, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="adobephotoshop"/>],
        },
      ],
    },
    {
      title: t('about.tab_experience'),
      info: [
        {
          title: t('about.exp_1_title'),
          stage: t('about.exp_1_stage'),
        },
        {
          title: t('about.exp_2_title'),
          stage: t('about.exp_2_stage'),
        },
      ],
    },
    {
      title: t('about.tab_credentials'),
      info: [
        {
          title: t('about.cred_1_title'),
          stage: t('about.cred_1_stage'),
        },
        {
          title: t('about.cred_2_title'),
          stage: t('about.cred_2_stage'),
        },
      ],
    },
  ];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      {/**avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/** TEXT */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
              {t('about.title')} <span className="text-accent">{t('about.title_accent')}</span> {t('about.title_rest')}
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              {t('about.description')}
          </motion.p>
          {/**counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/**experiences */}
              <div className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  2+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.counter_experience')}
                </div>
              </div>
             {/* Clients*/}
              <div className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  15+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.counter_clients')}
                </div>
              </div>
              {/* Project*/}
              <div className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  25+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.counter_projects')}
                </div>
              </div>
              {/* Technologies*/}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  8+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.counter_technologies')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex)=>{
              return (
                <div key={itemIndex}
                className={`${index === itemIndex && 'text-accent  after:bg-accent after:w-[100%]  after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={()=>setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2  xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) =>{
              return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/**title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div className="hidden md:flex">-</div>}
                {item.stage && <div>{item.stage}</div>}
                {/** icons */}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex)=>{
                    return <div key={itemIndex}
                    className="text-2xl  text-white">{icon}</div>;
                  })}
                </div>
              </div>
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
