/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from '../../store/hooks/reduxHooks';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import { getRandomKitty } from '../../store/thunk/cats-thunk';
import { IBreed } from '../../store/types';
import { titleAnimation, descriptionAnimation } from './animation-configs';

type CardProps = {
  breed: IBreed;
};

export default function CatCard({
  breed: { image, name, description, id },
}: CardProps) {
  const dispatch = useDispatch();
  const { randomImage } = useSelector((state) => state.breeds);
  const [cardImage, setCardImage] = useState(image.url);

  useEffect(() => {
    const { url, breed_id } = randomImage;

    if (breed_id === id) {
      setCardImage(url);
    }
  }, [randomImage]);

  const handleChangeImage = useCallback(() => {
    dispatch(getRandomKitty({ id }));
  }, [id, dispatch]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: 0.975 }}
        transition={{ duration: 0.7, ease: 'linear' }}
        className='flex flex-col w-full h-full bg-white rounded-lg shadow-lg'
      >
        <img
          className='rounded-t-lg w-100 object-cover'
          src={cardImage}
          alt={name}
        />

        <div className='flex flex-col flex-grow gap-5 h-full justify-between p-6 text-[#373d59]'>
          <m.h3
            // initial={{ scale: 0, opacity: 0 }} // left it here for showing different approach in implementation
            // whileInView={{ scale: 1, opacity: 1 }}
            // transition={{ duration: 0.7, ease: 'linear' }}
            initial='hidden'
            whileInView='visible'
            custom={2.5}
            variants={titleAnimation}
            className='font-bold sm:text-3xl text-2xl pb-4 border-b-2 border-[#ededed]'
          >
            {name}
          </m.h3>
          <m.p
            // initial={{ scaleZ: 0, opacity: 0 }} // left it here for showing different approach in implementation
            // whileInView={{ scaleZ: 1, opacity: 1 }}
            // transition={{ duration: 0.8, ease: 'linear' }}
            initial='hidden'
            whileInView='visible'
            custom={3.5}
            variants={descriptionAnimation}
            className='pb-4 border-b-2 border-[#ededed]'
          >
            {description}
          </m.p>
          <button
            className='card-btn ml-auto h-10 w-fit font-semibold px-3 text-white rounded-[15px]'
            onClick={handleChangeImage}
          >
            Change image
          </button>
        </div>
      </m.div>
    </LazyMotion>
  );
}
