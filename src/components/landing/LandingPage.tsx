import { Logo } from "./Logo"
import { ComingSoon } from "./ComingSoon"

export function LandingPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-sigh-bg1 via-sigh-bg2 via-60% to-sigh-warm
                  font-quicksand"
    >
      {/* Decorative gradient orbs - warmer tones */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full
                      bg-gradient-to-br from-amber-100/40 to-orange-100/20 blur-3xl"
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
                      bg-gradient-to-tr from-rose-100/25 to-amber-100/30 blur-3xl"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-gradient-to-r from-indigo-100/15 to-purple-100/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 animate-fade-in-up flex flex-col items-center gap-7">
        <h1 className="text-4xl font-bold tracking-wider text-sigh-blue font-quicksand">
          sighcomics
        </h1>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-sigh-lavender/50 to-transparent" />

        <Logo />

        <ComingSoon />

        <a
          href="#"
          className="mt-1 inline-flex items-center gap-2 px-6 py-2.5
                      rounded-full text-sm font-medium tracking-wide
                      text-sigh-blue/90 bg-sigh-blue/8
                      border border-sigh-blue/15
                      shadow-sm shadow-sigh-blue/5
                      hover:bg-sigh-blue/12 hover:border-sigh-blue/25
                      hover:shadow-md hover:shadow-sigh-blue/10
                      transition-all duration-300 ease-out"
        >
          stay tuned
        </a>
      </div>
    </main>
  )
}
