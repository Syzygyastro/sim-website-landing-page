import { useEffect, useRef } from "react"

const SPARKLE_COLORS = [
  "#a0aae6",
  "#c4b5fd",
  "#e8c4a0",
  "#f0abcf",
  "#a5b4fc",
  "#d4b896",
]

export function useSparkleTrail() {
  const lastSparkleTime = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.timeStamp - lastSparkleTime.current < 80) return
      lastSparkleTime.current = e.timeStamp

      const dot = document.createElement("div")
      dot.className = "sparkle"

      const color =
        SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      dot.style.background = color
      dot.style.animation = "sparkle-fade 0.8s ease-out forwards"

      document.body.appendChild(dot)
      setTimeout(() => dot.remove(), 800)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])
}
