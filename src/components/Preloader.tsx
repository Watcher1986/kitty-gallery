import { m, LazyMotion, domAnimation } from 'framer-motion';

import sleepCat from '/sleep-cat.gif';

export const Preloader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          display: 'none',
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{ delay: 3 }}
        className='absolute top-0 left-0 z-100 w-full min-h-screen flex justify-center items-center bg-black'
      >
        <img
          src={sleepCat}
          alt=''
          className='h-screen w-full object-cover z-100'
        />
        <m.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, ease: 'linear' }}
          className='absolute bottom-1/4 text-white text-3xl font-bold'
        >
          Just a few seconds
        </m.h1>
      </m.section>
    </LazyMotion>
  );
};
