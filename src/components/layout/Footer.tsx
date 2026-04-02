'use client'
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import TargetCursor from "../reactbit/TargetCursor";

export default function Footer() {
    return (
        <div className="relative bg-rave-black bottom-0 left-0 w-full px-20 py-15 pb-25 flex flex-col-reverse md:flex-row justify-between">
            <div className="flex flex-col justify-start gap-5">
                <h3 className="font-horizon text-ara-white text-lg">
                    STAY CONNECTED. <br/> STAY SOSYAL.
                </h3>
                <div className="cursor-target">
                    <Button intent="primary" size="md">
                        <a href="https://discord.gg/ZNMVGxMbGU">JOIN OUR DISCORD!</a>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <ul className="font-helvetica text-xs text-left md:text-right pb-10 md:py-0 tracking-wider font-semibold leading-8 text-ara-white">
                    <li><a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">INSTAGRAM</a></li>
                    <li><a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">TIKTOK</a></li>
                    <li><a className="hover:text-sosyal-red cursor-target" href="https://www.youtube.com/@SosyalStages">YOUTUBE</a></li>
                    <li><Link className="hover:text-sosyal-red cursor-target" href='/about/made_by_humans'>MADE BY HUMANS</Link></li>
                    <li><p className="text-chromeangels-grey font-light">© 2026 SOSYAL. ALL RIGHTS RESERVED.</p></li>
                </ul>
            </div>
        </div>
    )
}