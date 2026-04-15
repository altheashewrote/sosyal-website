'use client'
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import TargetCursor from "../reactbit/TargetCursor"

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={`absolute top-0 left-0 w-full z-50 px-5 lg:px-20 py-7 transition-colors ${menuOpen ? 'bg-slic3r-black/95' : ''}`}>

            <div className='hidden lg:grid grid-cols-3 items-center font-helvetica font-bold uppercase tracking-wide text-sm text-ara-white py-2'>
                <div className='flex gap-8'>
                    {/*<Link href='/about' className="hover:text-sosyal-red cursor-target">Manifesto</Link>*/}
                    <Link href='/artists' className="hover:text-sosyal-red cursor-target">Artists</Link>
                    <Link href='/events' className="hover:text-sosyal-red cursor-target">Events</Link>
                    <Link href='/merch' className="hover:text-sosyal-red cursor-target">Merch</Link>
                    {/*<Link href='/team' className="hover:text-sosyal-red cursor-target">Team</Link>*/}
                </div>
                <div className="flex justify-center">
                    <Link href='/'>
                        <Image
                            src='https://res.cloudinary.com/dmw0dgiw0/image/upload/v1775961162/sozwhite_vl3pmk.png'
                            width={100}
                            height={100}
                            alt='SOSYAL Logo'
                            className="cursor-target"
                        />
                    </Link>
                </div>
                <div className='flex gap-8 justify-end items-center'>
                    <Link href='/contact' className="hover:text-sosyal-red cursor-target">Contact</Link>
                    <a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">Instagram</a>
                    <a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">Tiktok</a>
                    <Image src='/cart.svg' width={16} height={16} className="invert brightness-0 cursor-target" alt="Your Cart"/>
                </div>
            </div>

            {/* ── Mobile / small-desktop header row (below lg) ── */}
            <div className="flex lg:hidden items-center justify-between px-5">
                <Link href='/' onClick={() => setMenuOpen(false)}>
                    <Image
                        src='https://res.cloudinary.com/dmw0dgiw0/image/upload/v1775961162/sozwhite_vl3pmk.png'
                        width={100}
                        height={100}
                        alt='SOSYAL Globe Logo'
                        className="cursor-target"
                    />
                </Link>

                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="cursor-target flex flex-col justify-center gap-1.5 p-1"
                >
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 px-5 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-5 pt-6 pb-4 font-helvetica font-bold uppercase tracking-wide text-sm text-ara-white">
                    {/*<Link href='/about' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Manifesto</Link>*/}
                    <Link href='/artists' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Artists</Link>
                    <Link href='/events' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Events</Link>
                    <Link href='/merch' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Merch</Link>
                    {/*<Link href='/team' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Team</Link>*/}
                    <div className="flex items-center gap-6 pt-2 border-t border-chromeangels-grey/30">
                        <Link href='/contact' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Contact</Link>
                        <a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">Instagram</a>
                        <a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">Tiktok</a>
                        <Image src='/cart.svg' width={16} height={16} className="invert brightness-0 cursor-target" alt="Your Cart"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
