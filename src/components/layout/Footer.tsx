'use client'
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Footer() {
    return (
        <div className="relative bg-rave-black bottom-0 left-0 w-full px-5 md:px-15 py-15 pb-15 flex flex-col gap-10 justify-between">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col justify-start gap-5 pb-15 md:pb-0">
                <h3 className="font-outersans text-ara-white font-medium leading-[1] tracking-[-0.25] text-3xl">
                    Stay Connected. <br/> Stay SOSYAL.
                </h3>
                <p className="font-jbm text-ara-white text-sm">
                    Collective • Events • Movement • Since 2025
                </p>
                <div className="cursor-target">
                    <Button intent="primary" size="md">
                        <a href="https://discord.gg/6CkvwR3RrV">Join Our Discord!</a>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                <div className="flex flex-col items-start">
                    <ul className="font-helvetica text-sm text-left md:text-right pb-10 md:py-0 font-medium leading-9 text-ara-white">
                        <li className="text-chromeangels-grey text-xs font-jbm pb-2">COMPANY</li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="/contact">Contact Us</a></li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://avenue22studios.com" target="_blank" rel="noopener noreferrer">Studios</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <ul className="font-helvetica text-sm text-left md:text-right pb-10 md:py-0 font-medium leading-9 text-ara-white">
                        <li className="text-chromeangels-grey text-xs font-jbm pb-2">SHOP</li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">Featured</a></li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">All Products</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <ul className="font-helvetica text-sm text-left md:text-right pb-10 md:py-0 font-medium leading-9 text-ara-white">
                        <li className="text-chromeangels-grey text-xs font-jbm pb-2">SOSYAL MEDIA</li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://instagram.com/sosyalstages">Instagram</a></li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://tiktok.com/@sosyalstages">TikTok</a></li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://www.youtube.com/@SosyalStages">YouTube</a></li>
                        <li><a className="hover:text-sosyal-red cursor-target" href="https://www.linkedin.com/company/sosyalstages/home/">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="flex flex-col font-jbm text-xs leading-[1.5] text-chromeangels-grey text-left items-start">
                <ul>
                    <li>© 2026 SOSYAL STAGES.</li>
                    <li>SOSYAL STUDIOS and the Block Logo are registered trademarks of SOSYAL. </li>
                    <li>&nbsp; </li>
                    <li>This website was made by humans, not AI-generated. </li>
                    <li className="underline hover:text-ara-white"><Link href="/made_by_humans">Learn More</Link></li>
                </ul>
            </div>
        </div>
    )
}