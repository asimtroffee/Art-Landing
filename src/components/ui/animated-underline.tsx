"use client"

import React from "react"

export default function AnimatedUnderline({
  className = "",
  color = "#D65108",
  height = 14,
}: {
  className?: string
  color?: string
  height?: number
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <svg
        className="pointer-events-none absolute -bottom-2 left-0 w-full overflow-visible"
        height={height}
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M2 7C40 1 80 11 120 6C155 1.5 185 8 198 4"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-draw-path"
        />
      </svg>
    </span>
  )
}
