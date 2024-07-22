import Link from 'next/link'
import { VercelImage } from '..'

const Header = () => {
  return (
    <div className="w-full bg-darker_gray">
      <div className="page__container flex items-center justify-between">
        <Link href="/">
          <VercelImage />
        </Link>
        <div className="flex items-center gap-4 uppercase font-light">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
