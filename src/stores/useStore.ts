import { create } from "zustand";
import { useSliderSlice } from "./useSlider"
import { SliderStore } from "@/types/stores/slider";

export const useStore = create<SliderStore>()((...a) => ({
  ...useSliderSlice(...a)
}))