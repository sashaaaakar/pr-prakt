import { slides } from "../constants/slider";

export const handlePrev = (setSlideIndex) => {
  setSlideIndex(0);
};

export const handleNext = (setSlideIndex) => {
  setSlideIndex(1);
};
