import { useCartStore } from '@/store'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
    //const cartStore = useCartStore()
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>

            <Link
                className='uppercase font-bold text-md  h-12 flex items-center'
                href='/'

            >
                next store

            </Link>

            <div className='flex items bg-center gap-8'>
                <div className=' flex items-center cursor-pointer relative'>

                    <svg
                        xmlns='http://www.w3.org/200/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.93 2.293c-.63.63-.184 1.707.707 1.707H1m0 0a2 2 0 100 4 2 2'
                        />
                    </svg>
                    <span className='bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3'>

                        2

                    </span>
                </div>


                <div>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <button className='border rounded-md border-gray-400 px-3 py-2'>Fazer Loguin</button>

                        </SignInButton>
                    </SignedOut>
                </div>
            </div>

        </nav>
    )
}
