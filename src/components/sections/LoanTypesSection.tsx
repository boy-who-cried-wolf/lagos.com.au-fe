import { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import { loanPills } from '../../data/content'

const CARD_BG = '#FAEBDC'

interface PillBody extends Matter.Body {
  _pillLabel?: string
  _pillText?: string
}

export function LoanTypesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const bootedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    const wrap = containerRef.current
    if (!section || !wrap) return

    let engine: Matter.Engine | null = null
    let render: Matter.Render | null = null
    let runner: Matter.Runner | null = null
    let bodies: PillBody[] = []

    const boot = () => {
      if (bootedRef.current) return
      bootedRef.current = true

      const isMobile = window.innerWidth < 768
      const PILL_H = isMobile ? 40 : 60
      const PAD_X = isMobile ? 24 : 40
      const FONT_SIZE = isMobile ? 12 : 16
      const FONT_STR = `bold ${FONT_SIZE}px Inter, -apple-system, sans-serif`

      const W = wrap.offsetWidth
      const H = isMobile ? 340 : 270
      const DPR = Math.min(window.devicePixelRatio || 1, 2)

      const tmp = document.createElement('canvas').getContext('2d')!
      tmp.font = FONT_STR

      engine = Matter.Engine.create({ gravity: { y: 1.5 } })
      const world = engine.world

      render = Matter.Render.create({
        element: wrap,
        engine,
        options: {
          width: W,
          height: H,
          wireframes: false,
          background: CARD_BG,
          pixelRatio: DPR,
        },
      })

      const T = 80
      const wallOpts = {
        isStatic: true,
        render: { fillStyle: CARD_BG, strokeStyle: CARD_BG, lineWidth: 0 },
        friction: 0.4,
      }

      Matter.Composite.add(world, [
        Matter.Bodies.rectangle(W / 2, H + T / 2, W + 200, T, wallOpts),
        Matter.Bodies.rectangle(-T / 2, H / 2, T, H * 3, wallOpts),
        Matter.Bodies.rectangle(W + T / 2, H / 2, T, H * 3, wallOpts),
      ])

      bodies = loanPills.map((pill, i) => {
        const tw = tmp.measureText(pill.label).width
        const pillW = tw + PAD_X * 2
        const startX = 60 + Math.random() * (W - 120)
        const startY = -(PILL_H + 20) - i * 90

        const body = Matter.Bodies.rectangle(startX, startY, pillW, PILL_H, {
          chamfer: { radius: PILL_H / 2 },
          restitution: 0.38,
          friction: 0.18,
          frictionAir: 0.018,
          angle: (Math.random() - 0.5) * 1.0,
          render: {
            fillStyle: pill.bg,
            strokeStyle: 'transparent',
            lineWidth: 0,
          },
        }) as PillBody

        body._pillLabel = pill.label
        body._pillText = pill.text
        Matter.Composite.add(world, body)
        return body
      })

      Matter.Events.on(render, 'afterRender', () => {
        const ctx = render!.context
        ctx.save()
        ctx.font = FONT_STR
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        bodies.forEach((body) => {
          ctx.save()
          ctx.translate(body.position.x, body.position.y)
          ctx.rotate(body.angle)
          ctx.fillStyle = body._pillText ?? '#fff'
          ctx.fillText(body._pillLabel ?? '', 0, 1)
          ctx.restore()
        })
        ctx.restore()
      })

      const mouse = Matter.Mouse.create(render.canvas)
      mouse.element.removeEventListener(
        'wheel',
        (mouse as Matter.Mouse & { mousewheel: EventListener }).mousewheel,
      )

      const mcon = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      })
      Matter.Composite.add(world, mcon)
      render.mouse = mouse

      Matter.Render.run(render)
      runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)

      const onResize = () => {
        const newW = wrap.offsetWidth
        render!.canvas.width = newW * DPR
        render!.canvas.style.width = `${newW}px`
        render!.options.width = newW
        Matter.Body.setPosition(world.bodies[0], { x: newW / 2, y: H + T / 2 })
        Matter.Body.setPosition(world.bodies[2], { x: newW + T / 2, y: H / 2 })
      }

      window.addEventListener('resize', onResize)

      return () => window.removeEventListener('resize', onResize)
    }

    let cleanupResize: (() => void) | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cleanupResize = boot() ?? undefined
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      cleanupResize?.()
      if (render) Matter.Render.stop(render)
      if (runner && engine) Matter.Runner.stop(runner)
      if (engine) Matter.Engine.clear(engine)
      if (render?.canvas) render.canvas.remove()
      wrap.innerHTML = ''
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-loantypes py-12 lg:py-20">
      <div className="container">
        <div className="loan-types-card overflow-hidden rounded-[2rem] bg-[#FAEBDC] pt-14 lg:rounded-[2.5rem] lg:pt-16">
          <div className="px-8 text-center lg:px-16">
            <div className="mb-5 inline-flex items-center rounded-[4px] bg-primary px-3 py-1 text-white">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                Loan Types We Specialise In
              </span>
            </div>
            <h2 className="mx-auto max-w-2xl font-neulis text-[clamp(2rem,1.6511rem+1.4887vw,3.4375rem)] leading-[1.15] font-medium text-text">
              Expert Mortgage Solutions
              <br className="hidden sm:block" /> for Every Property Goal
            </h2>
          </div>

          <div
            ref={containerRef}
            id="loan-canvas-container"
            className="mt-8 w-full pb-[20px] lg:pb-[50px]"
          />
        </div>
      </div>
    </section>
  )
}
