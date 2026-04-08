// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

 import Link from 'next/link';

 //next router
 import { useRouter } from 'next/router';

 // hooks
 import { useLanguage } from '../hooks/useLanguage'

const Nav = () => {
  const router = useRouter();
  const { t, language, changeLanguage } = useLanguage();

  const pathname = router.pathname.replace(/\/(en|fr|es)/, '');

  const navData = [
    { name: t('nav.home'), path: '/', icon: <HiHome /> },
    { name: t('nav.about'), path: '/about', icon: <HiUser /> },
    { name: t('nav.services'), path: '/services', icon: <HiRectangleGroup /> },
    { name: t('nav.work'), path: '/work', icon: <HiViewColumns /> },
    {
      name: t('nav.testimonials'),
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: t('nav.contact'),
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
    xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between
          xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-red-200/10 xl:h-max
          py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

        {/* Language selector - desktop */}
        <div className='hidden xl:flex flex-col gap-y-2 mb-4'>
          <button
            onClick={() => changeLanguage('en')}
            className={`text-sm font-medium transition-all ${language === 'en' ? 'text-accent' : 'text-gray-400 hover:text-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={`text-sm font-medium transition-all ${language === 'fr' ? 'text-accent' : 'text-gray-400 hover:text-white'}`}
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className={`text-sm font-medium transition-all ${language === 'es' ? 'text-accent' : 'text-gray-400 hover:text-white'}`}
          >
            ES
          </button>
        </div>

        {/* Language selector - mobile */}
        <div className='xl:hidden flex gap-x-4 px-4'>
          <button
            onClick={() => changeLanguage('en')}
            className={`text-sm font-medium transition-all ${language === 'en' ? 'text-accent' : 'text-gray-400'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={`text-sm font-medium transition-all ${language === 'fr' ? 'text-accent' : 'text-gray-400'}`}
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className={`text-sm font-medium transition-all ${language === 'es' ? 'text-accent' : 'text-gray-400'}`}
          >
            ES
          </button>
        </div>

        {navData.map((link, index)=>{
          return (
            <Link
              href={link.path}
              className={`${link.path === pathname && 'text-accent'} relative
              flex items-center group hover:text-accent transition-all duration-300`}
              key={index}
              >
                {/*tooltip*/}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center
                p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                {/*triangle*/}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent
                   border-y-[6px] border-r-0 absolute -right-2'>

                  </div>

                </div>
              </div>

                {/*icon*/}
              <div>{link.icon}</div>
            </Link>)
        })}
      </div>
    </nav>
  )
};

export default Nav;
