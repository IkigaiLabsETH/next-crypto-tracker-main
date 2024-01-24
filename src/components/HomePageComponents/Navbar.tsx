import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=''>
      <header className="p-4 navbarr">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex justify-between w-full">
            <Link  href="/" aria-label="Back to homepage" className="flex items-center p-2">
              <p className=' font-semibold text-3xl'>LTL</p>
            </Link>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Navbar
