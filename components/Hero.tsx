import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <section className='w-[95%] pl-16 max-w-6xl mx-auto grid grid-cols-[1fr_1.5fr] gap-16 mt-20'>
      <article className='flex flex-col gap-4'>
        <h2 className='font-bold'>Revolutionizing Everyday Work</h2>
        <p className='text-lg font-semibold'>
          Everydays work is important, but it is also time consuming. We can
          help.
        </p>
        <div className='flex gap-5 items-center'>
          <Image
            src='/images/i-store.png'
            alt='i-store'
            width={186}
            height={58}
          />
          <Image
            src='/images/playstore.png'
            alt='i-store'
            width={186}
            height={58}
          />
        </div>
        <div className='flex items-center gap-2'>
          <h2 className='font-semibold'>4.8</h2>
          <div>
            <span className='text-[#FFE600]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p className='text-[rgba(0,_0,_0,_0.5)]'>990+ Reviews</p>
          </div>
        </div>
      </article>
      <article className='grid grid-cols-2 gap-5'>
        <div className='grid'>
          <div className='bg-[#2B4E8C] text-white font-bold w-60 h-44 rounded-[20px] flex flex-col gap-2 items-center justify-center'>
            <h3>+1500</h3>
            <h3>Helpers</h3>
          </div>
          <Image
            src='/images/reschedule.png'
            alt='reschedule'
            width={370}
            height={200}
          />
        </div>
        <Image src='/images/grass.png' alt='grass' width={365} height={185} />
      </article>
    </section>
  )
}

export default Hero
