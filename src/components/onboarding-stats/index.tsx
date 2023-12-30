import '@/components/onboarding-stats/onboarding-stats.scss'
import { onboardingStats } from '@/data/content'
import uuid from 'react-uuid'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PaginationOptions } from 'swiper/types'

export function OnboardingStats() {
  const modulesArray = [Pagination, Autoplay]
  const autoplayData = {
    delay: 2500,
    disableOnInteraction: false
  }
  const paginationData: PaginationOptions = {
    clickable: true,
    el: '#containerForBullets',
    type: 'bullets',
    bulletClass: 'swiper-custom-bullet',
    bulletActiveClass: 'swiper-custom-bullet-active'
  }

  return (
    <>
      <div className="flex flex-col gap-4 overflow-hidden">
        <Swiper
          className="max-w-stat-slide"
          slidesPerView={1}
          loop={true}
          modules={modulesArray}
          autoplay={autoplayData}
          pagination={paginationData}
        >
          {onboardingStats.map(({ title, description }) => (
            <>
              <SwiperSlide
                className="flex max-w-stat-slide cursor-pointer items-center gap-4 rounded-lg bg-md-dark-blue-20 p-4 text-chad-blue-30"
                key={uuid()}
              >
                <p
                  className="text-4xl font-bold"
                  children={title.toUpperCase()}
                />
                <p className="text-sm" children={description} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <div id="containerForBullets" />
      </div>
    </>
  )
}
