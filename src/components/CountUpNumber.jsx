import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'

export default function CountUpNumber({ end, duration = 2, suffix = '', prefix = '', separator = ',' }) {
  const [displayValue, setDisplayValue] = useState(0)
  const nodeRef = useRef(null)

  useEffect(() => {
    const controls = animate(0, end, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        const rounded = Math.round(latest)
        setDisplayValue(rounded)
      }
    })

    return () => controls.stop()
  }, [end, duration])

  const formatted = separator
    ? displayValue.toLocaleString('en-US')
    : displayValue.toString()

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  )
}
