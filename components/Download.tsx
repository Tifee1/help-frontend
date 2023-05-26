import Image from 'next/image'

const Download: React.FC = () => {
  return (
    <section className='w-[95%] max-w-6xl mx-auto mt-24'>
      <div className='text-center relative'>
        <h3 className='text-[#2B4E8C]'>join us</h3>
        <h2 className='font-bold'>our app</h2>
      </div>
      <div className='grid lg:grid-cols-[2fr_1fr] gap-8 items-center justify-center mt-12'>
        <div className='relative flex justify-center items-center'>
          <Image
            src='/images/iPhone-13.png'
            alt='iphone'
            width={354}
            height={645}
            className='z-10'
          />
          <div className='absolute h-[370px] w-[370px] rounded-full border border-gray-300'></div>
          <div className='absolute h-[500px] w-[500px] rounded-full border border-gray-300'></div>
          <div className='absolute h-[600px] w-[600px] rounded-full border border-gray-300'></div>
          <div className='absolute top-[15%] left-[15%]'>
            <Image
              src='/images/small1.png'
              alt='small1'
              width={55}
              height={55}
            />
          </div>
          <div className='absolute top-[30%] right-[15%]'>
            <Image
              src='/images/small2.png'
              alt='small1'
              width={55}
              height={55}
            />
          </div>
          <div className='absolute top-[50%] left-[20%]'>
            <Image
              src='/images/small3.png'
              alt='small1'
              width={55}
              height={55}
            />
          </div>
          <div className='absolute top-[70%] right-[20%]'>
            <Image
              src='/images/small4.png'
              alt='small1'
              width={55}
              height={55}
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <h2 className='font-bold'>Download our app now</h2>
          <p className='text-lg text-[rgba(0,_0,_0,_0.5)]'>
            Make your to-do list wherever you are with our mobile app.
          </p>
          <p className='text-lg text-[rgba(0,_0,_0,_0.5)]'>
            <span className='font-semibold'>Help</span> is an easy way to find
            qualified and reliable local Helpers for everything from assembling
            and installing furniture to moving and cleaning
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
        </div>
      </div>
    </section>
  )
}

export default Download
