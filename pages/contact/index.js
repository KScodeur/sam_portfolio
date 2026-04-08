import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// icons
import { BsArrowRight } from 'react-icons/bs';

// hooks
import { useLanguage } from '../../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
          <Circles/>
          <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
            {/* TEXT */}
            <div className='flex-1 flex flex-col justify-center'>
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='h2'>
                  {t('contact.title')} <span className='text-accent'>{t('contact.title_accent')}</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                    {t('contact.subtitle')}
              </motion.p>
            </div>

            {/* FORM */}
            <motion.form
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit}
              className='flex-1 flex flex-col gap-6 w-full max-w-[600px] mx-auto xl:mx-0'
            >
              <div className='flex gap-6'>
                <input type='text' placeholder='Name' className='input' />
                <input type='email' placeholder='Email' className='input' />
              </div>
              <input type='text' placeholder='Subject' className='input' />
              <textarea placeholder='Message' className='textarea' rows='5'></textarea>
              <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </motion.form>
          </div>
          <Bulb/>
        </div>;
};

export default Contact;