'use client'
import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import TargetCursor from "../reactbit/TargetCursor"

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 z-50 left-0 w-full flex flex-col transition-colors duration-300 ${scrolled || menuOpen ? 'bg-slic3r-black' : 'bg-transparent'}`}>
            <div className="bg-slic3r-black font-helvetica font-medium tracking-tight items-center justify-center text-center leading-[1.3] text-base text-ara-white py-1">
                <h1>GET 10% OFF YOUR FIRST PURCHASE!</h1>
            </div>
            <div className='hidden lg:grid grid-cols-3 items-center font-helvetica font-medium lg:px-15 tracking-tight text-base text-ara-white pt-4 pb-6'>
                <div className='flex gap-8'>
                    <Link href='/about' className="hover:text-sosyal-red cursor-target">Manifesto</Link>
                    <Link href='/artists' className="hover:text-sosyal-red cursor-target">Artists</Link>
                    <Link href='/events' className="hover:text-sosyal-red cursor-target">Events</Link>
                    <Link href='/merch' className="hover:text-sosyal-red cursor-target">Shop</Link>
                    {/*<Link href='/team' className="hover:text-sosyal-red cursor-target">Team</Link>*/}
                </div>
                <div className="flex justify-center">
                    <Link href='/'>
                        <Image
                            src='/images/logos/SOS_WHT.svg'
                            width={50}
                            height={50}
                            alt='SOSYAL Logo'
                            className="cursor-target"
                        />
                    </Link>
                </div>
                <div className='flex gap-8 justify-end items-center'>
                    <Link href='/contact' className="hover:text-sosyal-red cursor-target">Contact</Link>
                    <a className="hover:text-sosyal-red cursor-target" href="https://avenue22studios.com">Studios</a>
                    <a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
                            <g fill="#f7f8f8">
                                <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                            </g>
                            </svg>
                    </a>
                    <a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
                            <g fill="#f7f8f8">
                                <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
                            </g>
                            </svg>
                    </a>
                </div>
            </div>

            {/* ── Mobile / small-desktop header row (below lg) ── */}
            <div className="grid grid-cols-3 w-full pb-4 lg:hidden items-center justify-center px-5 pt-4">

                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="cursor-target flex flex-col justify-center gap-1.5"
                >
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-ara-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                <Link href='/' onClick={() => setMenuOpen(false)} className="flex justify-center">
                    <Image
                        src='/images/logos/SOS_WHT.svg'
                        width={50}
                        height={50}
                        alt='SOSYAL Globe Logo'
                        className="cursor-target"
                    />
                </Link>


                {/* Hamburger button */}
                <div className='flex gap-3 justify-end items-center'>
                    <a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
                            <g fill="#f7f8f8">
                                <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                            </g>
                            </svg>
                    </a>
                    <a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
                            <g fill="#f7f8f8">
                                <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
                            </g>
                            </svg>
                    </a>
                </div>
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 px-5 ${menuOpen ? 'min-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-8 pt-40 pb-4 font-helvetica tracking-[-0.25] font-medium items-center text-xl text-ara-white">
                    <Link href='/about' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Manifesto</Link>
                    <Link href='/artists' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Artists</Link>
                    <Link href='/events' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Events</Link>
                    <Link href='/merch' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Shop</Link>
                    <Link href='/contact' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Contact</Link>
                    <Link href='https://avenue22studios.com' onClick={() => setMenuOpen(false)} className="hover:text-sosyal-red cursor-target">Studios</Link>
                </div>
            </div>
        </nav>
    )
}
