import { services } from '@/utils/constant'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const Services: React.FC = () => {
  const slidesPerView = {
    475: 2,
    768: 4,
    1120: 5,
  }

  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-16'>
      <div className='text-center relative'>
        <h3 className='text-[#2B4E8C]'>popular</h3>
        <h2 className='font-bold'>popular services</h2>
        <h3 className='text-[#2B4E8C]/70 font-bold relative sm:absolute right-0 top-[50%] lowercase'>
          10 options
        </h3>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          475: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          // 1280: { slidesPerView: 5 },
        }}
        loop={true}
        direction='horizontal'
        className='swiper-container py-16'
      >
        <div>
          {services.map((item, id) => (
            <SwiperSlide key={id}>
              <article>
                <Image
                  src={item.image}
                  alt={item.text}
                  width={240}
                  height={255}
                />
                <div className='text-center mt-2'>
                  <p className='capitalize mb-2'>{item.text}</p>
                  <p className='font-semibold'>+ {item.requests} requests</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  )
}

export default Services
