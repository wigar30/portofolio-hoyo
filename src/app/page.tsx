'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import clsx from 'clsx'
import { Sidebar } from './components/Sidebar';
import { Slider } from './components/Slider';
import { MainWrapper } from './components/MainSlider/Wrapper';

export default function Home() {
  const [startAnimate, setStartAnimate] = useState(false);
  const [transFeatImageEnd, setTransFeatImageEnd] = useState(false);
  
  const [isImageLoad, setIsImageLoad] = useState(false);
  const [storeTimeout, setStoreTimeout] = useState<NodeJS.Timeout>();
  
  
  useEffect(() => {
    setStartAnimate(true)

    const image = document.getElementById('fuxuan')
    const imageBg = document.getElementById('fuxuan-bg')
    if (!image || !imageBg) return

    const mouseEvt = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const imageRect = image.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const imageCenterY = imageRect.top + imageRect.height / 2;

      const distanceX = mouseX - imageCenterX;
      const distanceY = mouseY - imageCenterY;

      const moveFactor = 0.04; // Adjust this value to control the movement intensity

      const translateX = distanceX * moveFactor;
      const translateY = distanceY * moveFactor;

      image.style.transform = `translate(${translateX}px, ${translateY}px)`;
      imageBg.style.transform = `translate(${-translateX}px, ${-translateY}px)`;
    }

    const mouseEntr = () => {
      if (storeTimeout) {
        clearTimeout(storeTimeout)
      }

      setStoreTimeout(setTimeout(() => {
        image.addEventListener('mousemove', mouseEvt)
      }, 500))
    }

    image.addEventListener('mouseenter', mouseEntr)

    return () => {
      image?.removeEventListener('mousemove', mouseEvt)
    }
  }, [])

  const handleImageLoad = () => {
    setIsImageLoad(true)
  }

  const handleTransFeatImageEnd = () => {
    setTransFeatImageEnd(true)
  }

  return (
    <main className="w-screen h-full min-h-screen bg-primary-300 overflow-hidden">
      <div className='w-full h-full flex flex-col'>
        <div className={clsx('fixed top-8 left-10 z-30 transition-all duration-500 delay-200', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : '-translate-x-[150px] opacity-0')} >
          <Sidebar animate={startAnimate} />
        </div>

        <MainWrapper>
          <MainWrapper.Slider>
            <div className={clsx('absolute bottom-44 left-36 transition-all duration-700 delay-300', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0')}>
              <p className='text-9xl font-medium text-primary-950'>FU XUAN</p>
            </div>
            <div className='w-full flex-none relative'>
              <Image id='fuxuan' className={clsx('absolute z-20 transition-all duration-500', startAnimate ? 'right-0 opacity-100' : '-right-2 opacity-0', transFeatImageEnd && 'transition-none duration-0')} src='/images/fu-xuan-hsr.png' width={800} height={800} alt='fu-xuan-hsr' onLoad={handleImageLoad} onTransitionEnd={handleTransFeatImageEnd}></Image>
              <Image id='fuxuan-bg' className={clsx('absolute transition-all delay-75 duration-500 opacity-0', startAnimate && isImageLoad ? '-right-6 opacity-100' : 'right-0')} src='/images/fu-xuan-hsr-black.png' width={800} height={800} alt='fu-xuan-hsr-black'></Image>
            </div>
          </MainWrapper.Slider>

          <MainWrapper.Slider>
            <div className={clsx('absolute bottom-44 left-36 transition-all duration-700 delay-300', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0')}>
              <p className='text-9xl font-medium text-primary-950'>FU XUAN</p>
            </div>
            <div className='w-full flex-none relative'>
              <Image id='fuxuans' className={clsx('absolute z-20 transition-all duration-500', startAnimate ? 'right-0 opacity-100' : '-right-2 opacity-0', transFeatImageEnd && 'transition-none duration-0')} src='/images/fu-xuan-hsr.png' width={800} height={800} alt='fu-xuan-hsr' onLoad={handleImageLoad} onTransitionEnd={handleTransFeatImageEnd}></Image>
              <Image id='fuxuan-bgs' className={clsx('absolute transition-all delay-75 duration-500 opacity-0', startAnimate && isImageLoad ? '-right-6 opacity-100' : 'right-0')} src='/images/fu-xuan-hsr-black.png' width={800} height={800} alt='fu-xuan-hsr-black'></Image>
            </div>
          </MainWrapper.Slider>
        </MainWrapper>
        <div className={clsx('left-40 bottom-52 z-10 transition-all duration-500 delay-300', startAnimate && isImageLoad ? 'translate-x-0 opacity-100' : 'translate-x-[1000px] opacity-0', transFeatImageEnd ? 'fixed' : 'absolute')}>
          <Slider></Slider>
        </div>
      </div>
    </main>
  )
}
