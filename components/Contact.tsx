import { useState, useRef } from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
import { BiUser, BiEnvelope } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [subjectEntered, setEnteredSubject] = useState<string>('')
  const [nameEntered, setEnteredName] = useState<string>('')
  const [messageEntered, setEnteredMessage] = useState<string>('')

  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-16'>
      <div className='text-center relative mb-8'>
        <h3 className='text-[#2B4E8C]'>contacts</h3>
        <h2 className='font-bold'>contact us</h2>
      </div>
      <article className='grid grid-cols-2 items-center justify-center gap-16 w-[90%] max-w-3xl mx-auto rounded-[20px] shadow-2xl p-8'>
        <div className='grid gap-4'>
          <Image
            src='/images/contact.png'
            alt='contact'
            width={400}
            height={345}
          />
          <div className='grid grid-cols-2 gap-1'>
            <div className='flex gap-1 items-center font-semibold'>
              <FaPhoneAlt />
              <div>
                <p>Call Us</p>
                <p className='text-[rgba(0,_0,_0,_0.5)]'>+351-965-990-000</p>
              </div>
            </div>
            <div className='flex gap-1 items-center font-semibold'>
              <span className='font-bold'>@</span>
              <div>
                <p>Our Email</p>
                <p className='text-[rgba(0,_0,_0,_0.5)]'>@helpyou@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <form
          className='flex flex-col items-start justify-evenly w-full'
          ref={formRef}
          // onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className='w-full'>
            <div className='relative mb-6'>
              <BiUser className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 text-[rgba(0,_0,_0,_0.5)]' />
              <input
                type='text'
                id='name'
                className='h-[50px] box-border outline-none mb-8 p-[0.7rem] rounded-[20px] w-full resize-none shadow-lg bg-pry text-black font-medium pl-12 text-sm focus:ring-blue-500 focus:border-blue-500 block '
                placeholder='Your Name'
                value={nameEntered}
                onChange={(e) => setEnteredName(e.target.value)}
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='relative mb-6'>
              <BiEnvelope className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 text-[rgba(0,_0,_0,_0.5)]' />
              <input
                type='text'
                id='subject'
                className='h-[50px] box-border outline-none mb-8 p-[0.7rem] rounded-[20px] w-full resize-none shadow-lg bg-pry text-black font-medium pl-12 text-sm focus:ring-blue-500 focus:border-blue-500 block '
                placeholder='Your Subject'
                value={subjectEntered}
                onChange={(e) => setEnteredSubject(e.target.value)}
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='relative mb-6'>
              <BsChat className='pointer-events-none w-8 h-8 absolute top-6 transform -translate-y-1/2 left-3 text-[rgba(0,_0,_0,_0.5)]' />
              <textarea
                id='message'
                className='h-[150px] box-border outline-none mb-8 p-[0.7rem] rounded-[20px] w-full resize-none shadow-lg bg-pry text-black font-medium pl-12 text-sm focus:ring-blue-500 focus:border-blue-500 block '
                placeholder='Your Message'
                value={messageEntered}
                onChange={(e) => setEnteredMessage(e.target.value)}
              />
            </div>
          </div>

          <button
            type='submit'
            className='trans bg-[#2B4E8C] text-white rounded-[50px] font-medium w-full hover:bg-[#2B4E8C]/70 text-lg px-4 py-1'
          >
            Send
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
