import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { useLanguage } from '../hooks/useLanguage';

const CVBtn = () => {
    const { t } = useLanguage();

    // Remplace ce lien par ton lien Google Drive
    const cvLink = "https://drive.google.com/file/d/1uNphkFEd3or_bE-o4vw37MqCz5EX4htv/view?usp=drive_link";
    return (
        <div className='relative w-[185px] h-[185px] bg-circleStar bg-cover bg-center bg-no-repeat group'>
            <Link
                href={cvLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full h-full relative flex justify-center items-center group'
            >
                <div className='flex justify-center items-center xl:group-hover:scale-110 transition-all duration-300'>
                    <div className='absolute w-[140px] h-[140px] bg-gradient-to-r from-accent/80 to-primary/80 rounded-full blur group-hover:blur-xl transition-all duration-300'></div>
                    <div className='absolute w-[140px] h-[140px] bg-gradient-to-r from-accent to-primary rounded-full group-hover:scale-105 transition-all duration-300'></div>
                    <div className='w-12 h-12 bg-circleStar bg-cover relative flex justify-center items-center z-10'>
                        <HiArrowRight className='text-4xl text-white group-hover:rotate-45 transition-all duration-300' />
                    </div>
                </div>
            </Link>
            <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap'>
                <p className='text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {t('home.download_cv')}
                </p>
            </div>
        </div>
    );
};

export default CVBtn;
