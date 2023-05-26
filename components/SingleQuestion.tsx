import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

type Props = {
  question: string
  answer: string
}

const SingleQuestion = ({ question, answer }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className='mb-12 trans shadow-lg rounded-[20px] p-6'>
      <div
        className={
          'trans flex items-center justify-center gap-4 p-4 cursor-pointer'
        }
        onClick={() => setShow(!show)}
      >
        <h3>{question}</h3>
        <div>
          <span className='ml-4 text-2xl'>
            {show ? (
              <img
                src='./images/arrow-left.png'
                alt='left'
                className='w-[25px] h-[25px]'
              />
            ) : (
              <img
                src='./images/arrow-right.png'
                alt='right'
                className='w-[25px] h-[25px]'
              />
            )}
          </span>
        </div>
      </div>
      {show && (
        <p className='pt-4 text-base  text-center tracking-wide text-black/50'>
          {answer}
        </p>
      )}
    </div>
  )
}
export default SingleQuestion
