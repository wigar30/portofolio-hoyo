import { useState } from "react";

export const useSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  
  return {
    currentSlider
  }
}