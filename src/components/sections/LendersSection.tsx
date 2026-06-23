import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { lenders } from '../../data/content'
import 'swiper/css'

export function LendersSection() {
  const duplicatedLenders = [...lenders, ...lenders]

  return (
    <section className="section-lenders overflow-hidden bg-primary py-14 lg:py-16">
      <div className="container mb-10 text-center">
        <p className="font-neulis text-[clamp(1.375rem,1.0868rem+1.2298vw,2.5625rem)] leading-snug font-medium text-white">
          Why Choose Lagos Financial
        </p>
        <p className="font-neulis text-[clamp(1.375rem,1.0868rem+1.2298vw,2.5625rem)] leading-snug font-medium text-white">
          Access to <span className="text-accent">60+ lenders</span>
        </p>

        <div className="lenders-swiper mt-12 overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={0}
            loop
            freeMode
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
          >
            {duplicatedLenders.map((lender, i) => (
              <SwiperSlide key={`${lender.alt}-${i}`} className="!w-auto px-8 lg:px-12">
                <img
                  src={lender.src}
                  alt={lender.alt}
                  loading="lazy"
                  width={lender.width}
                  height={lender.height}
                  className="h-auto max-h-16 w-auto object-contain brightness-0 invert"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
