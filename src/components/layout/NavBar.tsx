'use client'
import Link from "next/link"
import Image from "next/image"
import TargetCursor from "../reactbit/TargetCursor"

export default function NavBar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-20 py-7">
            <div className='grid grid-cols-3 items-center font-helvetica font-bold uppercase tracking-wide text-sm text-ara-white'>
                <div className='flex gap-8'>
                    <Link href='/about' className="hover:text-sosyal-red cursor-target">Manifesto</Link>
                    <Link href='/artists' className="hover:text-sosyal-red cursor-target">Artists</Link>
                    <Link href='/events' className="hover:text-sosyal-red cursor-target">Events</Link>
                    <Link href='/merch' className="hover:text-sosyal-red cursor-target">Merch</Link>
                </div>
                <div className="flex justify-center">
                    <Image
                        src='/images/logos/sosyal-logo-globe.png'
                        width={60}
                        height={60}
                        alt='SOSYAL Globe Logo'
                        className="cursor-target"
                    />
                </div>
                <div className='flex gap-8 justify-end'>
                    <a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">Instagram</a>
                    <a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">Tiktok</a>
                    <Image src='/cart.svg' width={16} height={16} className="invert brightness-0 cursor-target" alt="Your Cart"/>
                </div>
            </div>
        </nav>
    )
}
