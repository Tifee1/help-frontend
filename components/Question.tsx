import { faqs } from '@/utils/constant'
import SingleQuestion from './SingleQuestion'

const Question: React.FC = () => {
  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-16'>
      <div className='text-center relative'>
        <h3 className='text-[#2B4E8C]'>questions</h3>
        <h2 className='font-bold'>Frequently asked questions</h2>
      </div>
      <article className='mt-20 grid grid-cols-2 gap-6 items-center justify-center w-[90%] max-w-3xl mx-auto'>
        {faqs.map((faq, index) => {
          return <SingleQuestion key={index} {...faq} />
        })}
      </article>
    </section>
  )
}

export default Question
