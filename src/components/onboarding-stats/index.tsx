import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types/modules/pagination";
import { onboardingStats } from "../../data/content";
import "./onboarding-stats.scss";

export function OnboardingStats() {
  const modulesArray = [Pagination, Autoplay];
  const autoplayData = {
    delay: 2500,
    disableOnInteraction: false,
  };
  const paginationData: PaginationOptions = {
    clickable: true,
    el: "#containerForBullets",
    type: "bullets",
    bulletClass: "swiper-custom-bullet",
    bulletActiveClass: "swiper-custom-bullet-active",
  };

  return (
    <>
      <div className="flex flex-col gap-4 overflow-hidden">
        <Swiper
          className="max-w-[364px]"
          slidesPerView={1}
          loop={true}
          modules={modulesArray}
          autoplay={autoplayData}
          pagination={paginationData}
        >
          {onboardingStats.map(({ title, description }, key) => (
            <>
              <SwiperSlide
                className="flex max-w-[364px] cursor-pointer items-center gap-4 rounded-lg bg-md-dark-blue-20 p-4 text-chad-blue-30"
                key={key}
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
  );
}
