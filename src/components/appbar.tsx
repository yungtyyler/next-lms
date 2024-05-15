import { auth } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

const AppBar = async () => {
  const session = await auth()

  return (
    <div>
      <div>
        {/* {session && session.user ? (
            <div className='relative w-[150px] h-[150px]'>
                <Image src={String(session.user.image)} alt="User Image" fill />
                <span>{session.user.name}</span>
            </div>
        ) : (

        )} */}
      </div>
    </div>
  )
}

export default AppBar
