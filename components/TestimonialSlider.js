// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import { SiLaravel, SiNginx, SiMeilisearch } from 'react-icons/si';

// hooks
import { useLanguage } from '../hooks/useLanguage';

const TestimonialSlider = () => {
  const { t } = useLanguage();

  const testimonialData = [
    {
      icon: <SiLaravel />,
      name: t('testimonials.t1_name'),
      position: t('testimonials.t1_position'),
      message: t('testimonials.t1_message'),
    },
    {
      icon: <SiNginx />,
      name: t('testimonials.t2_name'),
      position: t('testimonials.t2_position'),
      message: t('testimonials.t2_message'),
    },
    {
      icon: <SiMeilisearch />,
      name: t('testimonials.t3_name'),
      position: t('testimonials.t3_position'),
      message: t('testimonials.t3_message'),
    },
    {
      icon: <SiLaravel />,
      name: t('testimonials.t4_name'),
      position: t('testimonials.t4_position'),
      message: t('testimonials.t4_message'),
    },
    {
      icon: <SiNginx />,
      name: t('testimonials.t5_name'),
      position: t('testimonials.t5_position'),
      message: t('testimonials.t5_message'),
    },
    {
      icon: <SiMeilisearch />,
      name: t('testimonials.t6_name'),
      position: t('testimonials.t6_position'),
      message: t('testimonials.t6_message'),
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      mousewheel={true}
      className="testimonialSlider"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonialData.map((person, personIndex) => {
        return (
          <SwiperSlide key={personIndex}>
            <div className="flex flex-col items-start text-left gap-y-4 pb-16">
              <div className="w-16 h-16 mx-auto bg-black/50 rounded-full mb-4 flex items-center justify-center text-3xl text-accent">
                {person.icon}
              </div>
              <div className="text-2xl uppercase tracking-[0.06em] font-medium">
                {person.name}
              </div>
              <div className="text-[15px] uppercase tracking-[0.2em] font-semibold text-white/60">
                {person.position}
              </div>
              <p className="font-medium max-w-[350px]">
                {person.message}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
