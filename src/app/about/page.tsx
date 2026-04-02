import Link from "next/link"
import Image from "next/image"
import ScrollVelocity from "@/src/components/reactbit/ScrollVelocity"
import TimelineCard from "@/src/components/about/TimelineCard"
import { timelineEvents } from "@/src/data/timeline"


export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen gap-15 items-center  animate-page-fade-in">
                <div className="relative inset-y-35 items-center justify-center pb-32 md:pb-25">
                    <ScrollVelocity
                    texts={['SOSYAL MOVEMENT']}
                    velocity={100}
                    className="text-ara-white font-horizon items-center uppercase"
                    />
                </div>
                <div className="relative flex flex-col items-center justify-between gap-5 p-8 md:p-20">
                    <div className="flex flex-col max-w-150 font-helvetica text-ara-white text-md tracking-wide text-center text-pretty">
                        <h3 className="uppercase font-bold">everything in your track should have a purpose.</h3>
                        <h3 className="uppercase font-light">–Julian Isorena, creatively known as ISOxo <br/> <br/> </h3>
                        <p className="font-regular">SOSYAL was built to create a real stage for the next generation of artists and creatives. <br/><br/>
                        Our goal is to bring local talent and national acts onto the same platform, giving artists the opportunity to gain experience, exposure, and grow their craft. <br/><br/>
                        The SOSYAL MOVEMENT is built on collaboration, trust, and people who show up for each other. We believe strong communities are built by creatives supporting creatives.
                        <br/><br/>
                        While we're proud of our roots, SOSYAL is an inclusive movement focused on building opportunities and pushing the culture forward.
                        <br/><br/>
                        As the brand grows, the people within it grow with it.
                        <br/><br/>
                        SOSYAL is a launchpad. If one of us wins, we all win.
                        </p>
                    </div>
                </div>
            </main>
            <section className="relative w-full bg-slic3r-black px-6 md:px-20 py-20  animate-page-fade-in">
                <h3 className="font-horizon text-3xl text-ara-white text-center mb-20">YEAR ONE</h3>

                <div className="relative">
                    {/* center line — hidden on mobile, visible on md+ */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-chromeangels-grey -translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {timelineEvents.map((event, index) => (
                            <TimelineCard
                                key={event.id}
                                event={event}
                                side={index % 2 === 0 ? 'left' : 'right'}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}