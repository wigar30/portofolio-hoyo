import { useStore } from '@/stores/useStore'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Icon } from './Base/Icon'

export const Slider = () => {
  const spaceBetween = 30
  const [windowWidth, setWindowWidth] = useState(0)
  const [currentTranslateX, setCurrentTranslateX] = useState(0)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const updateIndex = useStore((state) => state.updateIndex)

  useEffect(() => {
    const getWindowWidth = window.innerWidth
    setWindowWidth(getWindowWidth)

    const getSlider = document.getElementById('slider')
    const getSliderWrapper = document.getElementById('slider-wrapper')
    if (getSlider && getSliderWrapper) {
      const getParent = getSlider.parentElement
      if (getParent) {
        const computedStyle = window.getComputedStyle(getParent)
        const getWidth = windowWidth - parseInt(computedStyle.getPropertyValue('left'))
        getSlider.style.width = `${getWidth}px`
      }

      getSliderWrapper.style.transform = `translate3d(${currentTranslateX}px, ${0}px, ${0}px)`
    }

    const getSliderRest = document.getElementById('slider-rest')
    if (getSliderRest) {
      getSliderRest.style.width = `${getWindowWidth}px`
    }

    const getElementSlider = document.getElementsByClassName('slider')
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
    updateIndex(Number(dataIndex))

    if (getSliderWrapper) {
      // const nextSlidePixel = (e.currentTarget.clientWidth + (Number(dataIndex) === 0 ? 0 : spaceBetween) + 8) * Number(dataIndex)
      // getSliderWrapper.style.transform = `translate3d(${-nextSlidePixel}px, ${0}px, ${0}px)`
    }
  }

  return (
    <section id="slider" className={clsx('relative')}>
      <div id="slider-wrapper" className="absolute flex left-0 transition-all duration-300 !overflow-y-auto">
        <div className="flex items-start space-x-2">
          <div className="relative w-8 h-8 top-3">
            <div className="w-6 h-6 border-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-primary-900 rounded-full bg-primary-900 transition-all duration-300 hover:w-8 hover:h-8" />
          </div>
          <div className="relative w-14 h-14 group/nav">
            <div className="w-10 h-10 absolute border-4 border-primary-900 rounded-full bg-none p-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 group-hover/nav:w-14 group-hover/nav:h-14" />
            <div className="w-6 h-6 bg-primary-800 rounded-full absolute flex items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 group-hover/nav:delay-100 group-hover/nav:w-10 group-hover/nav:h-10"></div>
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
        <div className="slider" onClick={handleSliderClick}>
          <Image src="/images/yae-miko-honkai-impact.png" width={250} height={180} alt="fu-xuan-hsr-thumbs"></Image>
        </div>
        <div id="slider-rest" className="h-4 ml-8 border-r-0 border-4 border-primary-900 bg-primary-950 rounded-l-full flex-none"></div>
      </div>
    </section>
  )
}
