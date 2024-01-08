'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Slider } from './components/Slider'
import { Sidebar } from './components/Sidebar'
import { MainWrapper } from './components/MainSlider/Wrapper'
import { useStore } from '@/stores/useStore'

export default function Home() {
  const [startAnimate, setStartAnimate] = useState(false)
  const [transFeatImageEnd, setTransFeatImageEnd] = useState(false)

  const [isImageLoad, setIsImageLoad] = useState(false)

  const currentIndex = useStore((state) => state.currentIndex)
  const isTransitionEnd = useStore((state) => state.isTransitionEnd)

  useEffect(() => {
    setStartAnimate(true)

    const mainSliders = document.getElementsByClassName('main-slider')
    let getIdImage = ''
    if (mainSliders) {
      const getImage = mainSliders[currentIndex].querySelector('div div img')
      const getId = getImage?.getAttribute('id')
      if (getId) getIdImage = getId
    }

    const image = document.getElementById(getIdImage)
    const imageBg = document.getElementById(`${getIdImage}-bg`)
    if (!image || !imageBg) return

    const mouseEvt = (event: MouseEvent) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      const imageRect = image.getBoundingClientRect()
      const imageCenterX = imageRect.left + imageRect.width / 2
      const imageCenterY = imageRect.top + imageRect.height / 2

      const distanceX = mouseX - imageCenterX
      const distanceY = mouseY - imageCenterY

      const moveFactor = 0.04

      const translateX = distanceX * moveFactor
      const translateY = distanceY * moveFactor

      image.style.transform = `translate(${translateX}px, ${translateY}px)`
      imageBg.style.transform = `translate(${-translateX}px, ${-translateY}px)`
    }

    image.removeEventListener('mousemove', mouseEvt)
    image.addEventListener('mousemove', mouseEvt)

    return () => {
      image?.removeEventListener('mousemove', mouseEvt)
    }
  }, [currentIndex])

  const handleImageLoad = () => {
    setIsImageLoad(true)
  }

  const handleTransFeatImageEnd = () => {
    setTransFeatImageEnd(true)
  }

  return (
    <main className="w-screen h-full min-h-screen bg-primary-300 overflow-hidden">
      <div className="w-full h-full flex flex-col">
        <div className={clsx('fixed top-8 left-10 z-30 transition-all duration-500 delay-200', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : '-translate-x-[150px] opacity-0')}>
          <Sidebar animate={startAnimate} />
        </div>

        <MainWrapper>
          <MainWrapper.Slider>
            <div className="fu-xuan-bg">
              {/* <div
                className={clsx(
                  'absolute bottom-44 left-36 transition-all duration-700 delay-300',
                  startAnimate && isImageLoad && isTransitionEnd && currentIndex === 0 ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0'
                )}
              >
                <p className="text-9xl font-medium text-primary-950">FU XUAN</p>
              </div> */}
              <div className="w-full flex-none relative">
                <Image
                  id="fuxuan"
                  priority={true}
                  className={clsx('absolute z-20 transition-all duration-500', startAnimate && isImageLoad && isTransitionEnd && currentIndex === 0 ? 'right-0 opacity-100' : '-right-2 opacity-0')}
                  src="/images/fu-xuan-hsr.png"
                  width={800}
                  height={800}
                  alt="fu-xuan-hsr"
                  onLoad={handleImageLoad}
                  onTransitionEnd={handleTransFeatImageEnd}
                ></Image>
                <Image
                  id="fuxuan-bg"
                  priority={true}
                  className={clsx('absolute transition-all delay-75 duration-500', startAnimate && isImageLoad && isTransitionEnd && currentIndex === 0 ? '-right-6 opacity-100' : 'right-0 opacity-0')}
                  src="/images/fu-xuan-hsr-black.png"
                  width={800}
                  height={800}
                  alt="fu-xuan-hsr-black"
                ></Image>
              </div>
            </div>
          </MainWrapper.Slider>

          <MainWrapper.Slider>
            <div className="bronya-apho-bg">
              {/* <div
                className={clsx(
                  'absolute top-20 right-36 transition-all duration-700 delay-300',
                  startAnimate && isTransitionEnd && currentIndex === 1 ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'
                )}
              >
                <p className="text-9xl font-medium text-secondary-950">BRONYA</p>
              </div> */}
              <div className="w-full flex-none relative">
                <Image
                  id="bronya"
                  priority={true}
                  className={clsx('absolute z-20 transition-all duration-500', startAnimate && isTransitionEnd && currentIndex === 1 ? 'left-0 opacity-100' : '-left-2 opacity-0')}
                  src="/images/bronya-apho.png"
                  width={800}
                  height={800}
                  alt="bronya-apho"
                  onLoad={handleImageLoad}
                  onTransitionEnd={handleTransFeatImageEnd}
                ></Image>
                <Image
                  id="bronya-bg"
                  priority={true}
                  className={clsx('absolute transition-all delay-75 duration-500', startAnimate && isTransitionEnd && currentIndex === 1 ? '-left-6 opacity-100' : 'left-0 opacity-0')}
                  src="/images/bronya-apho-black.png"
                  width={800}
                  height={800}
                  alt="bronya-apho-black"
                ></Image>
              </div>
            </div>
          </MainWrapper.Slider>

          <MainWrapper.Slider>
            <div className="yae-miko-bg">
              {/* <div
                className={clsx(
                  'absolute top-40 left-36 transition-all duration-700 delay-300',
                  startAnimate && isTransitionEnd && currentIndex === 2 ? 'translate-x-0 opacity-100 visible' : '-translate-x-[100%] opacity-0 invisible'
                )}
              >
                <p className="text-9xl font-medium text-primary-950">YAE MIKO</p>
              </div> */}
              <div className="w-full flex-none relative">
                <Image
                  id="yaemiko"
                  priority={true}
                  className={clsx('absolute z-20 transition-all duration-500', startAnimate && isTransitionEnd && currentIndex === 2 ? 'right-0 opacity-100' : '-right-2 opacity-0')}
                  src="/images/yae-miko-honkai-impact.png"
                  width={600}
                  height={800}
                  alt="yae-miko-honkai-impact"
                  onLoad={handleImageLoad}
                  onTransitionEnd={handleTransFeatImageEnd}
                ></Image>
                <Image
                  id="yaemiko-bg"
                  priority={true}
                  className={clsx('absolute transition-all duration-500 delay-75', startAnimate && isTransitionEnd && currentIndex === 2 ? 'right-8 -top-2 opacity-100' : 'right-0 opacity-0')}
                  src="/images/yae-miko-honkai-impact-black.png"
                  width={600}
                  height={800}
                  alt="yae-miko-honkai-impact-black"
                ></Image>
              </div>
            </div>
          </MainWrapper.Slider>
          <div
            id="slider-controller"
            className={clsx('fixed left-40 bottom-52 transition-all duration-500 delay-200', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : 'translate-x-[1000px] opacity-0')}
          >
            <Slider></Slider>
          </div>
        </MainWrapper>
      </div>
    </main>
  )
}
