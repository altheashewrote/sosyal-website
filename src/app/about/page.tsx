import Link from "next/link"
import Image from "next/image"
import ScrollVelocity from "@/src/components/reactbit/ScrollVelocity"
import TimelineCard from "@/src/components/about/TimelineCard"
import { timelineEvents } from "@/src/data/timeline"


export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen">
                <Image
                src="/images/events/HTOK_02.jpg"
                alt="Crowd at LNY 2026"
                fill
                className="object-cover grayscale brightness-50"
                />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center text-white px-5 md:px-15 pt-35 pb-15">
                    <h1 className="font-outersans text-4xl lg:text-5xl font-bold text-ara-white uppercase leading-none tracking-tight">
                        KEEPING IT SOSYAL <br/>
                        <span className="font-helvetica font-bold tracking-tight">since 2025.</span>
                    </h1>
                    <p className="pt-10 max-w-100 md:max-w-200 font-helvetica text-base md:text-lg tracking-[-0.25] leading-[1.3]">
                        SOSYAL is a movement made to empower the world’s next generation of artists and creatives in electronic music. <br/><br/>
                        As of 2026, our community has grown to 4,500+ ravers strong, bringing new rave concepts to life—including fashion shows, live metal performances, and tarot readings.<br/><br/>
                        <span className="font-bold">But we’ve been more than simply throwing events. </span><br/><br/>
                        By bringing national acts and local talent onto the same platform, we’ve given artists of all levels the opportunity to grow their craft. This makes SOSYAL not only a group that throws events, but a platform built on collaboration and trust, as well as a community of creatives that continue to show up for each other every day. <br/><br/>
                        In the digital age and with the rise of AI, hyper-individualism, and self-optimisation campaigns, SOSYAL remains committed to being first and foremost a place where creatives support creatives. <br/><br/>
                        As proud as we are of our roots, we also centre our movement on inclusivity, building opportunities for creatives in the electronic music scene, and pushing the culture forward. <br/><br/>
                    </p>
                    <div className="flex flex-col gap-5 font-jbm font-medium text-sm underline">
                        <Link href="/events" className=" hover:text-sosyal-red ">FIND AN EVENT</Link>
                        <Link href="/artists" className=" hover:text-sosyal-red ">CHECK OUT OUR ARTISTS</Link>
                        <Link href="/made_by_humans" className=" hover:text-sosyal-red ">AI USE STATEMENT</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}