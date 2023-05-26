import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='w-[90%] max-w-7xl mx-auto'>
      <section className='grid grid-cols-4 gap-4 '>
        {/* Logo */}
        <article className='text-[rgba(0,_0,_0,_0.5)]'>
          <Image src='/images/logo.png' alt='logo' width={121} height={49} />
          <p className='my-4'>
            Make your to-do list wherever you are with our mobile app.
          </p>
          <p>©2023. All rights reserved.</p>
        </article>
        {/* About Us */}
        <article className='text-[rgba(0,_0,_0,_0.5)] grid gap-2 '>
          <h3 className='text-[#2B4E8C] mb-2'>About us</h3>
          <Link href='#faq' className='font-semibold'>
            Frequently asked questions
          </Link>
          <Link href='#policy' className='font-semibold'>
            Confidentiality Policy
          </Link>
          <Link href='#contact' className='font-semibold'>
            Contact
          </Link>
          <Link href='#blog' className='font-semibold'>
            Blog
          </Link>
        </article>
        {/* Contact */}
        <article className='text-[rgba(0,_0,_0,_0.5)]'>
          <h3 className='text-[#2B4E8C] mb-4'>Contacts</h3>
          <p className='mb-2 font-semibold'>+351-965-990-000</p>
          <p className='font-semibold'>@helpyou@gmail.com</p>
        </article>
        {/* App */}
        <article className='text-[rgba(0,_0,_0,_0.5)]'>
          <h3 className='text-[#2B4E8C] mb-4'>Download Our App</h3>
          <p className='mb-4 font-semibold'>
            Tackle your to-do list wherever you are with our mobile app.
          </p>
          <div className='flex gap-4 items-center'>
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
        </article>
      </section>
      <h4 className='text-[rgba(14,_14,_14,_0.5)] font-semibold text-center mt-8 mb-16'>
        By using this website, you understand the information being presented is
        provided for informational purposes only
      </h4>
    </footer>
  )
}

export default Footer
