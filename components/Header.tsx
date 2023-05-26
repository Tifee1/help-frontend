import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='w-[95%] pl-16 max-w-6xl mx-auto grid grid-cols-[100px_auto] gap-16 mt-20'>
      <Image src='/images/logo.png' alt='logo' width={121} height={49} />
      <div className='ml-20 flex items-start gap-10'>
        <Link href='/'>Home</Link>
        <Link href='#contact'>Contact Us</Link>
        <Link href='#policy'>Confidentiality Policy</Link>
        <Link href='#about'>About Us</Link>
        <Link href='#blog'>Blog</Link>
      </div>
    </header>
  )
}

export default Header
