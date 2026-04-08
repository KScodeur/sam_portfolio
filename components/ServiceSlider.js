import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper';

// hooks
import { useLanguage } from '../hooks/useLanguage';

const ServiceSlider = () => {
  const { t } = useLanguage();

  const serviceData = [
    {
      icon: <RxDesktop />,
      title: t('services.webdev_title'),
      description: t('services.webdev_desc'),
    },
    {
      icon: <RxCrop />,
      title: t('services.react_title'),
      description: t('services.react_desc'),
    },
    {
      icon: <RxRocket />,
      title: t('services.nextjs_title'),
      description: t('services.nextjs_desc'),
    },
    {
      icon: <RxPencil2 />,
      title: t('services.api_title'),
      description: t('services.api_desc'),
    },
    {
      icon: <RxReader />,
      title: t('services.optim_title'),
      description: t('services.optim_desc'),
    },
  ];

  return (
    <Swiper
      breakpoints={{
        320:{
          slidesPerView:1,
          spaceBetween: 15,
        },

        640:{
          slidesPerView:3,
          spaceBetween: 15,
        }
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index)=>{
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover'>
              {/**icons */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/**title & description */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px]'>{item.description}</p>
              </div>
              {/**arrow */}
              <div className=''>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>

            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
