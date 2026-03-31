"use client"

import { ReactNode } from "react"

export function HorizontalScroll({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 pb-4 px-5 md:px-4 min-w-min">
        {children}
      </div>
    </div>
  )
}

export function ScrollCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex-shrink-0 w-80 lg:w-auto">
      {children}
    </div>
  )
}
