export const scaleOnTap = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.03 },
};

export const scaleOnTapSmallButtons = {
  whileTap: { scale: 0.92 },
  transition: { duration: 0.03 },
};

export const popupScaleFadeIn = {
  initial: { opacity: 0, scale: 0, x: 20, y: -10 },
  animate: { opacity: 1, scale: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -20, y: 5 },
  transition: { ease: 'easeOut', duration: 0.3 },
};
