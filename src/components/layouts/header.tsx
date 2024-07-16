import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full py-8 px-4 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/vercel.svg"
          alt="Logo"
          className="max-w-[100px] w-full object-cover"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-4 uppercase font-light">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default Header
