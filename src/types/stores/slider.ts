export type SliderStore = {
  currentIndex: number
  isTransitionEnd: boolean
  updateIndex: (index: number) => void
  updateTransitionEnd: (trans: boolean) => void
}
