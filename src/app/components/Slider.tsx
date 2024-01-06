import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react"

export const Slider = () => {
  const spaceBetween = 30
  const [windowWidth, setWindowWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [sliderLength, setSliderLength] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  useEffect(() => {
    const getWindowWidth = window.innerWidth
    setWindowWidth(getWindowWidth)

    const getSlider = document.getElementById('slider')
    const getSliderWrapper = document.getElementById('slider-wrapper')
    if (getSlider && getSliderWrapper) {
      const getParent = getSlider.parentElement
      if (getParent) {
        const computedStyle = window.getComputedStyle(getParent);
        const getWidth = windowWidth - parseInt(computedStyle.getPropertyValue('left'))
        getSlider.style.width = `${getWidth}px`
      }

      setWrapperWidth(getSliderWrapper.offsetWidth)
      getSliderWrapper.style.transform = `translate3d(${currentTranslateX}px, ${0}px, ${0}px)`
    }

    const getSliderRest = document.getElementById('slider-rest')
    if (getSliderRest) {
      getSliderRest.style.width = `${getWindowWidth}px`
    }

    const getElementSlider = document.getElementsByClassName('slider')
    setSliderLength(getElementSlider.length)

    const arrSilders = Array.from(getElementSlider)
    for (const el of arrSilders) {
      const index = arrSilders.indexOf(el)
      el.setAttribute('data-index', `${index}`)
      el.setAttribute('style', `margin-left: ${spaceBetween}px;`)
    }

    if (getElementSlider.length) {
      getElementSlider[0].classList.add('active-slide')
    }
  }, [])

  const handleSliderClick = (e: React.MouseEvent) => {
    const getSliderWrapper = document.getElementById('slider-wrapper')
    const dataIndex = e.currentTarget.getAttribute('data-index')

    setCurrentSlideIndex(Number(dataIndex))
    
    if (getSliderWrapper) {
      const nextSlidePixel = (e.currentTarget.clientWidth + (Number(dataIndex) === 0 ? 0 : spaceBetween) + 8) * Number(dataIndex)
      getSliderWrapper.style.transform = `translate3d(${-nextSlidePixel}px, ${0}px, ${0}px)`
    }
  }

  return (
    <section id="slider" className={clsx('relative')}>
      <div id="slider-wrapper" className="absolute flex left-0 transition-all duration-300 !overflow-y-auto">
        <div className="flex items-start space-x-6">
          <div className="w-6 h-6 border-4 border-primary-900 rounded-full bg-primary-900" />
          <div className="w-10 h-10 border-4 border-primary-900 rounded-full bg-none p-1">
            <div className="w-full h-full bg-primary-800 rounded-full" />
          </div>
        </div>

        <div className="slider" onClick={handleSliderClick}>
          <Image src="/images/fu-xuan-hsr.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div className="slider" onClick={handleSliderClick}>
          <Image src="/images/bronya-apho.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div className="slider" onClick={handleSliderClick}>
          <Image src="/images/yae-miko-honkai-impact.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div id="slider-rest" className="h-4 ml-8 border-r-0 border-4 border-primary-900 bg-primary-950 rounded-l-full flex-none">
        </div>
      </div>
    </section>
  )
}