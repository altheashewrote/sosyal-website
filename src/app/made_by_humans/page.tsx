import Link from "next/link"
import Image from "next/image"
import ScrollVelocity from "@/src/components/reactbit/ScrollVelocity"
import TimelineCard from "@/src/components/about/TimelineCard"
import { timelineEvents } from "@/src/data/timeline"


export default function MadeByHumans() {
    return (
        <div className="flex flex-col min-h-screen items-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen">
                <Image
                src="/images/events/PURG_01.JPG"
                alt="Crowd at LNY 2026"
                fill
                className="object-cover grayscale brightness-50"
                />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center text-ara-white px-5 md:px-15 pt-35 pb-15">
                    <div className="bg-niteharts-grey rounded-sm w-fit max-w-200 px-15 py-5 h-fit">
                        <h1 className="font-jbm font-bold text-lg">ARTIFICIAL INTELLIGENCE (AI) USE STATEMENT <br/> <br/></h1>
                        <p className="font-jbm font-medium text-sm text-chromeangels-grey">As creatives and builders, we commit ourselves to using AI responsibly and ethically, in a way that does not interfere with creativity. <br/> <br/>
                        AI can be a powerful tool for building a website. <br/> <br/>
                        As such, we used <span><Link href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">Cursor</Link></span> — an AI software development agent — to better understand our codebase, using Grok 4.7 High Fast to fix bugs as they arose during development. <br/> <br/>
                        Yet, this was the <span className="font-bold font-italic">sole use</span> of AI in the development of this website. <br/> <br/>
                        In all other parts of development, from ideation to deployment, we relied exclusively on human input and creativity.<br/> <br/>
                        We designed, wireframed, and prototyped all features of this website with <span><Link href="https://figma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">Figma</Link></span>, conducting a usability test with members of the SOSYAL team to determine the most optimal user experience(s) to implement in code.<br/> <br/>
                        Using a <span><Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">NextJS</Link></span> framework, we translated our Figma design to code, writing our implementation from scratch + by hand. <span><Link href="https://react.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">ReactJS (a TypeScript library)</Link></span> was used to build the front-end skeleton of the website, while <span><Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">TailwindCSS</Link></span> was used to style it according to the standards outlined in our Brand Identity Guide (V1.2, September 2026). <br/> <br/>
                        We designed our back-end architecture with <span><Link href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">NodeJS</Link></span>, using <span><Link href="https://papaparse.com/docs" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">PapaParse API</Link></span>  to take event + artist data from Google Sheet CSVs. Likewise, our contact form was built with <span><Link href="https://resend.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-ara-white">Resend API</Link></span>, and we designed it in a way that makes the enquiry process as simple as possible.<br/> <br/>
                        That being said, a website like ours simply cannot be vibe-coded. Even powerful agents are only capable of replicating what humans have already built. They can't follow brand identity guidelines. They can't spice up designs. They most certainly can't provide us with solutions more creative than what we've came up with at SOSYAL.<br/> <br/>
                        We chose to develop this website by hand because we recognise that human touch is a fundamental part of creativity. It's a practice that has showed up both in our music and the way we build community.<br/> <br/>
                        <br/>
                        </p>
                        <ul>
                            <li><Link href="https://github.com/altheashewrote/sosyal-website/tree/main" target="_blank" rel="noopener noreferrer"><p className="font-jbm font-medium underline text-sm text-chromeangels-grey hover:text-ara-white">Version History (GitHub)</p></Link></li>
                            <li><Link href="https://www.figma.com/design/Ixz8qM9PZ37b0R5AluqJQw/SOSYAL-WEBSITE-V2.0?node-id=0-1&t=O29H0Ce5Yq8Opj7X-1" target="_blank" rel="noopener noreferrer"><p className="font-jbm font-medium underline text-sm text-chromeangels-grey hover:text-ara-white">Design + Prototype (Figma)</p></Link></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}