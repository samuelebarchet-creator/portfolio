"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 2%)"
        softness={0.5}
        intensity={0.9}
        noise={0.08}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.2}
        rotation={0}
        speed={0.8}
        colors={["hsl(355, 90%, 50%)", "hsl(290, 70%, 35%)", "hsl(320, 85%, 45%)"]}
      />
    </div>
  )
}
