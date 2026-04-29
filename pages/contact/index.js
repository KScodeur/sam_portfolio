import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// icons
import { BsArrowRight, BsCheckCircle, BsXCircle } from 'react-icons/bs';

// hooks
import { useLanguage } from '../../hooks/useLanguage';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      showToast('success', t('contact.success'));
      e.target.reset();
    } catch (error) {
      console.error(error);
      showToast('error', t('contact.error'));
    } finally {
      setLoading(false);
    }
  };


  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
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
          <input type='text' name='name' placeholder={t('contact.name')} className='input' />
          <input type='email' name='email' placeholder={t('contact.email')} className='input' />
        </div>
        <input type='text' name='subject' placeholder={t('contact.subject')} className='input' />
        <textarea name='message' placeholder={t('contact.message')} className='textarea' rows='5'></textarea>
        <button
          type='submit'
          disabled={loading}
          className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
              <span>{t('contact.sending')}</span>
            </div>
          ) : (
            <>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>{t('contact.send')}</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </>
          )}
        </button>
      </motion.form>
    </div>
    <Bulb />

    {/* Toast Notification */}
    {toast.show && (
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.3 }}
        className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border backdrop-blur-sm ${toast.type === 'success'
            ? 'bg-green-500/90 border-green-400 text-white'
            : 'bg-accent/90 border-accent text-white'
          }`}
      >
        {toast.type === 'success' ? (
          <BsCheckCircle className='text-2xl' />
        ) : (
          <BsXCircle className='text-2xl' />
        )}
        <span className='font-medium'>{toast.message}</span>
        <button
          onClick={() => setToast({ show: false, type: '', message: '' })}
          className='ml-2 text-white/70 hover:text-white transition-colors'
        >
          ×
        </button>
      </motion.div>
    )}
  </div>;
};

export default Contact;