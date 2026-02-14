interface ComingSoonProps {
  className?: string
}

export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div className={className}>
      <p className="text-xl font-semibold tracking-[0.25em] text-sigh-blue/80 animate-glow">
        under construction  
        <span className="inline-flex ml-1 gap-[2px]">
          <span className="animate-dot-1">.</span>
          <span className="animate-dot-2">.</span>
          <span className="animate-dot-3">.</span>
        </span>
      </p>
      {/* <div
        className="mt-4 mx-auto h-px w-32
                    bg-gradient-to-r from-transparent via-sigh-lavender to-transparent
                    animate-shimmer bg-[length:200%_100%]"
      /> */}
    </div>
  )
}
