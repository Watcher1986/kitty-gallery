import { motion } from 'framer-motion';
import { useSelector } from '../../store/hooks/reduxHooks';

import { useLazyLoadingBreeds } from '../../utils/hooks/useLazyLoadingBreeds';
import CatCard from '../../components/common/CatCard';
import { IBreed } from '../../store/types';

import { headerTitleAnimation } from './animation-configs';

export default function CatsBreedsGallery() {
  const { catsBreedsList } = useSelector((state) => state.breeds);

  const { loadMoreRef } = useLazyLoadingBreeds();

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3 }}
      className='view-section p-4 grid-cols-auto-fit gap-4 md:bg-[#e6f4f1] lg:bg-[#e6f4f1] min-h-screen'
    >
      <motion.h2
        initial='hidden'
        whileInView='visible'
        variants={headerTitleAnimation}
        className='title py-4 text-4xl text-[#373d59] font-bold'
      >
        Cats Breeds Gallery
      </motion.h2>
      <div className='grid md:grid-cols-auto-fit lg:grid-cols-auto-fit gap-4'>
        {catsBreedsList.map((breed: IBreed, index: number) => (
          <CatCard key={`breed.id-${index}`} breed={breed} />
        ))}
        <div className='w-full' ref={loadMoreRef} />
      </div>
    </motion.section>
  );
}