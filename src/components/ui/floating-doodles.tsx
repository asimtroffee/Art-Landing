"use client"

import React from "react"
import { Sparkles, Star, Zap } from "lucide-react"

type DoodleItem = {
  icon: "star" | "sparkle" | "zap" | "circle" | "plus"
  top?: string
  left?: string
  right?: string
  bottom?: string
  size?: number
  color?: string
  duration?: number
  delay?: number
  rotate?: number
}

const DEFAULT_DOODLES: DoodleItem[] = [
  { icon: "star", top: "12%", left: "6%", size: 24, color: "#EFA00B", duration: 5, delay: 0, rotate: 12 },
  { icon: "sparkle", top: "25%", right: "8%", size: 28, color: "#D65108", duration: 6, delay: 1, rotate: -15 },
  { icon: "circle", top: "70%", left: "4%", size: 14, color: "#EFA00B", duration: 4.5, delay: 0.5 },
  { icon: "star", bottom: "18%", right: "6%", size: 20, color: "#EFA00B", duration: 5.5, delay: 1.5, rotate: 25 },
  { icon: "zap", top: "50%", right: "4%", size: 22, color: "#D65108", duration: 7, delay: 2, rotate: -10 },
  { icon: "sparkle", bottom: "30%", left: "10%", size: 20, color: "#D65108", duration: 6, delay: 2.5, rotate: 45 },
]

export default function FloatingDoodles({
  items = DEFAULT_DOODLES,
  className = "",
}: {
  items?: DoodleItem[]
  className?: string
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((item, index) => {
        const style: React.CSSProperties = {
          position: "absolute",
          top: item.top,
          left: item.left,
          right: item.right,
          bottom: item.bottom,
          animation: `float-gentle ${item.duration ?? 5}s ease-in-out infinite alternate`,
          animationDelay: `${item.delay ?? 0}s`,
          transform: `rotate(${item.rotate ?? 0}deg)`,
          opacity: 0.75,
        }

        let IconComponent: React.ReactNode = null
        switch (item.icon) {
          case "star":
            IconComponent = <Star size={item.size ?? 20} fill={item.color ?? "#EFA00B"} color={item.color ?? "#EFA00B"} />
            break
          case "sparkle":
            IconComponent = <Sparkles size={item.size ?? 24} color={item.color ?? "#D65108"} />
            break
          case "zap":
            IconComponent = <Zap size={item.size ?? 20} fill={item.color ?? "#D65108"} color={item.color ?? "#D65108"} />
            break
          case "circle":
            IconComponent = (
              <div
                style={{
                  width: item.size ?? 12,
                  height: item.size ?? 12,
                  borderRadius: "50%",
                  border: `2.5px solid ${item.color ?? "#EFA00B"}`,
                }}
              />
            )
            break
          case "plus":
            IconComponent = (
              <span className="font-heading text-2xl font-black" style={{ color: item.color ?? "#D65108" }}>
                +
              </span>
            )
            break
        }

        return (
          <div key={index} style={style} className="drop-shadow-sm transition-opacity">
            {IconComponent}
          </div>
        )
      })}
    </div>
  )
}
