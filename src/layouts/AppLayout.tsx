import { m, LazyMotion, domAnimation } from 'framer-motion';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{
          once: true,
        }}
        className='min-h-full lg:[margin-inline:10%] md:[margin-inline:10%]'
      >
        {children}
      </m.main>
    </LazyMotion>
  );
};
