import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import StarRatings from 'react-star-ratings'

import { reviews } from '@/utils/constant'
import Image from 'next/image'

const Reviews: React.FC = () => {
  SwiperCore.use([Pagination])
  return (
    <section className='w-[95%] max-w-7xl mx-auto my-16'>
      <div className='text-center relative mb-8'>
        <h3 className='text-[#2B4E8C]'>Reviews</h3>
        <h2 className='font-bold font-raleway'>Feedback from you</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          475: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className='swiper-container'
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <article className='rounded-[20px] shadow-2xl flex flex-col items-center justify-center px-6 h-[485px] mb-12 relative'>
              <div className='flex items-center justify-center mb-4'>
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-[68] h-[68]'
                />
              </div>
              <h3 className='font-bold text-center mb-2'>{review.name}</h3>

              <div className='flex items-center justify-center mb-10'>
                <StarRatings
                  rating={review.stars}
                  starDimension='20px'
                  starSpacing='1px'
                  starRatedColor='#FFE500'
                />
              </div>
              <p className='text-[rgba(0,_0,_0,_0.7)] mb-20'>
                {review.message}
              </p>
              <p className='font-semibold absolute bottom-2 right-5'>
                {review.date}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews
