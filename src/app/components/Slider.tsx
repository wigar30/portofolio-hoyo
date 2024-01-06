import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react"

export const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [sliderLength, setSliderLength] = useState(0);
  
  useEffect(() => {
    const windowWidth = window.innerWidth
    setWindowWidth(windowWidth)

    const getSlider = document.getElementById('slider')
    const getSliderWrapper = document.getElementById('slider-wrapper')
    if (getSlider && getSliderWrapper) {
      const getParent = getSlider.parentElement
      if (getParent) {
        const computedStyle = window.getComputedStyle(getParent);
        const getWidth = windowWidth - parseInt(computedStyle.getPropertyValue('left'))
        getSlider.style.width = `${getWidth}px`
        getSliderWrapper.style.width = `${getWidth}px`
      }
    }

    const getElementSlider = document.getElementsByClassName('slider')
    setSliderLength(getElementSlider.length)
  }, [])
  return (
    <section id="slider" className={clsx('relative')}>
      <div id="slider-wrapper" className="absolute flex space-x-6 left-0 !overflow-y-auto">
        <div className="flex items-start space-x-6">
          <div className="w-6 h-6 border-4 border-primary-900 rounded-full bg-primary-900" />
          <div className="w-10 h-10 border-4 border-primary-900 rounded-full bg-none p-1">
            <div className="w-full h-full bg-primary-800 rounded-full" />
          </div>
        </div>

        <div className="slider">
          <Image src="/images/fu-xuan-hsr.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div className="slider">
          <Image src="/images/bronya-apho.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div className="slider">
          <Image src="/images/yae-miko-honkai-impact.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div className="h-4 border-r-0 border-4 border-primary-900 bg-primary-950 rounded-l-full flex-grow">
        </div>
      </div>
    </section>
  )
}