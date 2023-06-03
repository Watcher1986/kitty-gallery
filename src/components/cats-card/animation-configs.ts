export const titleAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: custom * 0.2, ease: 'linear' },
  }),
};

export const descriptionAnimation = {
  hidden: {
    scaleZ: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scaleZ: 1,
    opacity: 1,
    transition: { duration: custom * 0.2, ease: 'linear' },
  }),
};
