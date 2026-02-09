interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <img
        src="/Sighcomics icon 256x256.png"
        alt="Sigh Comics Logo"
        className="w-48 h-auto object-contain mix-blend-multiply
                   drop-shadow-[0_4px_24px_rgba(59,76,192,0.1)]
                   animate-float [animation-duration:4s]
                   transition-all ease-in-out
                   hover:scale-105
                   hover:drop-shadow-[0_8px_32px_rgba(59,76,192,0.2)]"
      />
    </div>
  )
}
