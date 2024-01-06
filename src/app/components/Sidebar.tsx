import { SidebarProps } from "@/types/components/sidebar"
import clsx from "clsx"

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="relative">
      <div className="absolute z-20 w-20 h-[700px] rounded-3xl border-8 border-primary-800 bg-primary-700">

      </div>
      <div className={clsx('absolute w-20 h-[700px] rounded-3xl bg-primary-950 transition-all duration-500 delay-1000', props.animate ? 'top-2 left-2' : 'top-0 left-0')}>

      </div>
    </aside>
  )
}