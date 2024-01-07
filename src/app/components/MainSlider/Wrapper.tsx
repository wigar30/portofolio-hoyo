'use client'

import { MainWrapperProps } from '@/types/components/MainSlider/wrapper'
import { Slider } from './Slider'
import { useEffect, useState } from 'react'
import { useStore } from '@/stores/useStore'

export const MainWrapper = (props: MainWrapperProps) => {
  const [windowWidth, setWindowWidth] = useState(0)

  const currentIndex = useStore((state) => state.currentIndex)
  const updateTransitionEnd = useStore((state) => state.updateTransitionEnd)

  useEffect(() => {
    const windowWidth = window.innerWidth
    setWindowWidth(windowWidth)

    const getMainWrapper = document.getElementById('main-wrapper')
    if (getMainWrapper) {
      getMainWrapper.style.width = `${windowWidth}px`
      getMainWrapper.style.transform = `translateX(${0}px)`
    }
  }, [])

  useEffect(() => {
    handleChangeSlider(currentIndex)
  }, [currentIndex])

  const handleChangeSlider = (index: number) => {
    const getMainWrapper = document.getElementById('main-wrapper')
    if (getMainWrapper) {
      updateTransitionEnd(false)
      const nextSlidePixel = windowWidth * index
      getMainWrapper.style.transform = `translateX(${-nextSlidePixel}px)`
    }
  }

  const handleTransitionEnd = () => {
    updateTransitionEnd(true)
  }

  return (
    <section id="main-wrapper" className="main-wrapper flex flex-nowrap transition-all duration-500 delay-200" onTransitionEnd={handleTransitionEnd}>
      {props.children}
    </section>
  )
}

MainWrapper.Slider = Slider
