import { SliderStore } from '@/types/stores/slider'
import { StateCreator } from 'zustand'

export const useSliderSlice: StateCreator<SliderStore> = (set) => ({
  currentIndex: 0,
  isTransitionEnd: false,
  updateIndex: (index: number) => set(() => ({ currentIndex: index })),
  updateTransitionEnd: (trans: boolean) => set(() => ({ isTransitionEnd: trans }))
})
