import { services } from '@/utils/constant'
import { Swiper, SwiperSlide } from 'swiper/react'

const Services: React.FC = () => {
  return (
    <section className='w-full ml-[70px] mt-16'>
      <div className='text-center relative mb-[50px]'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>popular</h3>
        <h2 className='font-bold font-raleway text-[32px]'>popular services</h2>
        <h3 className='text-[rgba(43,_78,_140,_0.5)] font-bold font-raleway text-[32px] relative sm:absolute right-[10%] top-[50%] lowercase'>
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
        }}
        loop={true}
        direction='horizontal'
        className='swiper-container'
      >
        <div>
          {services.map((item, id) => (
            <SwiperSlide key={id}>
              <article>
                <img
                  src={item.image}
                  alt={item.text}
                  className='w-[240px] h-[255px]'
                />
                <div className='text-center mt-2 text-[14px] text-[#484848]'>
                  <p className='capitalize mb-2.5'>{item.text}</p>
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
