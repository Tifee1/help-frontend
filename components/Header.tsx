import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='w-[95%] pl-16 max-w-6xl mx-auto grid grid-cols-[100px_auto] gap-16 mt-20'>
      <Image src='/images/logo.png' alt='logo' width={121} height={49} />
      <div className='ml-20 lg:flex hidden items-start gap-10 tracking-widest text-xl'>
        <Link
          href='/'
          className='trans hover:border-b hover:border-b-teal-950 pb-3'
        >
          Home
        </Link>
        <Link
          href='#contact'
          className='trans hover:border-b hover:border-b-teal-950 pb-3'
        >
          Contact Us
        </Link>
        <Link
          href='#policy'
          className='trans hover:border-b hover:border-b-teal-950 pb-3'
        >
          Confidentiality Policy
        </Link>
        <Link
          href='#about'
          className='trans hover:border-b hover:border-b-teal-950 pb-3'
        >
          About Us
        </Link>
        <Link
          href='#blog'
          className='trans hover:border-b hover:border-b-teal-950 pb-3'
        >
          Blog
        </Link>
      </div>
    </header>
  )
}

export default Header
