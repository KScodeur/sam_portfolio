import TestimonialSlider from '../../components/TestimonialSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// hooks
import { useLanguage } from '../../hooks/useLanguage';

const Testimonials = () => {
  const { t } = useLanguage();

  return <div className='h-full bg-primary/30 py-32 flex items-center'>
          <Circles/>
          <div className='container mx-auto h-full flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 mb-12 xl:mb-0'>
                {t('testimonials.title')} <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-12 max-w-[400px] mx-auto lg:mx-0'>
                  {t('testimonials.subtitle')}
              </motion.p>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='w-full xl:max-w-[100%]'
              >
                <TestimonialSlider/>
              </motion.div>
          </div>
          <Bulb/>
        </div>;
};

export default Testimonials;