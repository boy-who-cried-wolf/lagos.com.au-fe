export function LagosLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/assets/images/header-logo.svg"
      alt="Lagos Financial"
      className={`h-9 w-auto sm:h-11 ${className}`.trim()}
      width={209}
      height={44}
    />
  )
}
