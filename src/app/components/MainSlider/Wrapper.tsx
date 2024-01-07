'use client'

import { MainWrapperProps } from "@/types/components/MainSlider/wrapper"
import { Slider } from "./Slider"
import { useEffect, useState } from "react";
import { useStore } from "@/stores/useStore";

export const MainWrapper = (props: MainWrapperProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const currentIndex = useStore((state) => state.currentIndex)

  useEffect(() => {
    const windowWidth = window.innerWidth
    setWindowWidth(windowWidth)

    const getMainWrapper = document.getElementById('main-wrapper')
    if (getMainWrapper) {
      getMainWrapper.style.width = `${windowWidth}px`
    }
  }, [])

  useEffect(() => {
    console.log(123, currentIndex)
  }, [currentIndex])

  return (
    <section id="main-wrapper" className="main-wrapper flex flex-nowrap overflow-hidden">
      {props.children}
    </section>
  )
}

MainWrapper.Slider = Slider