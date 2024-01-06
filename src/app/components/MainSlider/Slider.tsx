import { MainSliderProps } from "@/types/components/MainSlider/slider"

export const Slider = (props: MainSliderProps) => {
  return (
    <div className="main-slider w-screen h-screen flex-none overflow-hidden">
      {props.children}
    </div>
  )
}