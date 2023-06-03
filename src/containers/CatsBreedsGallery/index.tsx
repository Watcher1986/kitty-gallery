import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSelector } from '../../store/hooks/reduxHooks';

import { useLazyLoadingBreeds } from '../../utils/hooks/useLazyLoadingBreeds';
import CatCard from '../../components/cats-card/CatCard';

import { IBreed } from '../../store/types';
import { headerTitleAnimation } from './animation-configs';

export default function CatsBreedsGallery() {
  const { catsBreedsList } = useSelector((state) => state.breeds);
  // Custom hook for lazy loading ann initial data retrieve
  const { loadMoreRef } = useLazyLoadingBreeds();

  return (
    <>
      <section className='p-4 bg-transparent min-h-screen z-0'>
        <LazyMotion features={domAnimation}>
          <m.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
            variants={headerTitleAnimation}
            className='title py-5 text-[2.5rem] text-[#fff] font-bold'
          >
            Cats Breeds Gallery
          </m.h2>
        </LazyMotion>
        <div className='media-container'>
          {catsBreedsList.map((breed: IBreed, index: number) => (
            <CatCard key={`breed.id-${index}`} breed={breed} />
          ))}
          <div className='w-full' ref={loadMoreRef} />
        </div>
      </section>
    </>
  );
}
