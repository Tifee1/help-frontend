import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className='w-[95%] pl-16 max-w-7xl mx-auto grid grid-cols-[100px_auto] gap-16 mt-20'>
      <img src='/images/logo.png' alt='logo' className='w-[121px] h-[49px]' />
      <div className='ml-20 lg:flex hidden items-start gap-10 tracking-widest text-xl'>
        <Link
          href='/'
          className={`trans ${
            router.pathname === '/' ? 'border-b border-b-teal-950 pb-3' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href='#contact'
          className={`trans ${
            router.pathname === '/contact'
              ? 'border-b border-b-teal-950 pb-3'
              : ''
          }`}
        >
          Contact Us
        </Link>
        <Link
          href='#policy'
          className={`trans ${
            router.pathname === '/policy'
              ? 'border-b border-b-teal-950 pb-3'
              : ''
          }`}
        >
          Confidentiality Policy
        </Link>
        <Link
          href='#about'
          className={`trans ${
            router.pathname === '/about'
              ? 'border-b border-b-teal-950 pb-3'
              : ''
          }`}
        >
          About Us
        </Link>
        <Link
          href='#blog'
          className={`trans ${
            router.pathname === '/blog' ? 'border-b border-b-teal-950 pb-3' : ''
          }`}
        >
          Blog
        </Link>
      </div>
    </header>
  )
}

export default Header
