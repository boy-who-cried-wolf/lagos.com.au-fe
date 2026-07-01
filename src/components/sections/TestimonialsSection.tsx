import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { testimonials } from '../../data/content'
import { QuoteIcon } from '../icons/Icons'
import 'swiper/css'

const reviewSlides = [...testimonials, ...testimonials]

export function TestimonialsSection() {
  const paginationRef = useRef<HTMLDivElement>(null)

  const bindPagination = (swiper: SwiperType) => {
    if (!paginationRef.current) return
    if (swiper.params.pagination && typeof swiper.params.pagination === 'object') {
      swiper.params.pagination.el = paginationRef.current
      swiper.pagination.init()
      swiper.pagination.render()
      swiper.pagination.update()
    }
  }

  return (
    <section id="testimonials" className="section-reviews py-16 lg:py-24">
      <div className="mb-12 text-center lg:mb-14">
        <div className="mb-5 inline-flex items-center rounded-md bg-accent px-5 py-1.5 text-white">
          <span className="text-sm font-semibold tracking-[0.15em] uppercase">Our Client&apos;s</span>
        </div>
        <h2 className="font-neulis text-[28px] leading-[1.1] font-medium text-text sm:text-[38px] lg:text-[48px]">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-3xl px-4 text-sm leading-relaxed text-text/75 lg:text-base">
          We&apos;ve built long-lasting relationships with our clients in Bondi and surrounding Sydney suburbs,
          providing personalised service and expert advice that makes a real difference. Here&apos;s what some of our
          clients have to say about their experience working with Lagos Financial:
        </p>
      </div>

      <div className="reviews-swiper overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="!overflow-visible"
          slidesPerView={1.1}
          spaceBetween={16}
          centeredSlides
          loop
          grabCursor
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'reviews-bullet',
            bulletActiveClass: 'reviews-bullet-active',
            renderBullet: (_, className) =>
              `<button type="button" class="${className}" aria-label="Testimonial slide"></button>`,
          }}
          breakpoints={{
            1024: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: false },
            1280: { slidesPerView: 2.5, spaceBetween: 28, centeredSlides: false },
            1920: { slidesPerView: 3, spaceBetween: 28, centeredSlides: false },
          }}
          onBeforeInit={bindPagination}
          onSwiper={bindPagination}
        >
          {reviewSlides.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.author}-${index}`} className="!h-auto">
              <div className="reviews-card relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl bg-primary p-2 sm:min-h-[340px] sm:flex-row">
                <div className="relative min-h-[200px] w-full shrink-0 sm:min-h-0 sm:w-[45%]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full min-h-[200px] w-full object-cover object-center sm:min-h-full"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 lg:p-6">
                  <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center">
                    <QuoteIcon />
                  </div>
                  <p className="mb-6 flex-1 text-[clamp(1rem,0.8553rem+0.6173vw,1.25rem)] leading-relaxed font-semibold text-white lg:text-base">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-sm font-medium text-white">— {testimonial.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={paginationRef} className="reviews-pagination mt-8 flex justify-center gap-2" />
      </div>
    </section>
  )
}
