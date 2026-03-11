import Link from "next/link"
import Image from "next/image"
import ScrollVelocity from "@/src/components/reactbit/ScrollVelocity"
import TimelineCard from "@/src/components/about/TimelineCard"


export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen h-screen gap-15 items-center">
                <div className="relative inset-y-35 items-center justify-center pb-25">
                    <ScrollVelocity
                    texts={['the future is sosyal     ']}
                    velocity={100}
                    className="text-ara-white font-horizon items-center uppercase"
                    />
                </div>
                <div className="relative flex flex-col items-center justify-between gap-5 p-20">
                    <div className="flex flex-col max-w-150 font-helvetica text-ara-white text-md tracking-wide text-center text-pretty">
                        <h3 className="uppercase font-bold">everything in your track should have a purpose.</h3>
                        <h3 className="uppercase font-light">–Julian Isorena, creatively known as ISOxo <br/> <br/> </h3>
                        <p className="font-regular">We live by this quote every single day of our lives. <br/><br/>
                        From our starting point at a boba shop in early 2025,
                        we've stopped at nothing to ensure that artists and music lovers find community through electronic dance music. 
                        We recognise that PLURR (peace, love, unity, respect, and responsibility) are at the forefront of rave culture; as such, we
                        plan our events meticulously so as to amplify underrepresented voices, introduce new ways of experiencing EDM to the community, and unite people from all walks of life.
                        <br/><br/>
                        We acknowledge that the EDM scene was built on anti-racism and anti-capitalism, pioneered by people of colour, LGBTQIA+ people, and neurodivergent people desiring a safe space for free expression.
                        As a collective founded by Filipinos, we refuse to be one-dimensional, crafting each space with diversity, community advocacy, and chosen family in mind.
                        <br/><br/>
                        To be SOSYAL means to not leave any artist behind. When an artist of ours grows, we grow with them.
                        </p>
                    </div>
                </div>
            </main>
            <section className="relative flex flex-col w-screen h-1500 bg-slic3r-black px-20 gap-10">
                <h3 className="font-horizon text-3xl text-ara-white text-center">YEAR ONE</h3>
                <div className="relative flex flex-row justify-between gap-10">
                    <div className="flex flex-col items-start gap-10">
                        <TimelineCard
                        date="26 January 2025"
                        name="Boba & Bass"
                        desc="Where it all began, featuring the one and only SNDR (pronounced 'sonder')."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <TimelineCard
                        date="9 May 2025"
                        name="Studios Vol. 1"
                        desc="Launched a series of intimate DJ sets with feral energy, brought to you by the Gratitude. Featuring Desert Hydra."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white text-right flex flex-col gap-6 pl-54 py-25">
                            <div>
                                <h3 className="font-bold uppercase">7 SEPTEMBER 2025</h3>
                                <p className="font-medium uppercase tracking-wide">SOSYAL takes over Galactic Gardens</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="9 September 2025"
                        name="Discord Launch"
                        desc="A new form of SOSYALISING is here."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white text-right flex flex-col gap-6 pl-30 py-25">
                            <div>
                                <h3 className="font-bold uppercase">22 November 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Operation Knockout: Unofficial Knock2 Afters</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="19 December 2025"
                        name="Bass City"
                        desc="The culmination of months of community-building, trial and error, and throwing down. Our Reverb SF debut, featuring DJ KANG, Shogun, and IKU B2B CHRISPYNOY."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <TimelineCard
                        date="14 March 2026"
                        name="After Snow"
                        desc="Find yourself at the mercy of heavy dubstep, featuring Lost Lands artists VLCN and Lazrus, as well as Harabaz and Slic3r."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                    </div>
                    <div className="w-0.5 h-880 bg-chromeangels-grey"></div>
                    <div className="flex flex-col gap-10">
                        <div className="font-helvetica max-h-140 text-ara-white flex flex-col gap-6 py-25">
                            <div>
                                <h3 className="font-bold uppercase">28 FEBRUARY 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Boba and Bass II featuring SNDR and ARATHENA</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="11 April 2025"
                        name="Labubass"
                        desc="Setting the stage for the first time at Concord's Gratitude Lounge. Featuring CHRISPYNOY, Harabaz, and DRO."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white flex flex-col gap-6 py-5">
                            <div>
                                <h3 className="font-bold uppercase">7 JUNE 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Barrio Rave featuring CHRISPYNOY</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">14 JUNE 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Prismatik featuring Skittlez</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">4 JULY 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Studios Vol. 2 featuring 2DY4, Son of Ed</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">19 JULY 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Studios Vol. 2 featuring Emorfik, Re!gn, ARATHENA</p>
                            </div>
                            
                        </div>
                        <TimelineCard
                        date="16 August 2025"
                        name="Studios Vol. 4"
                        desc="The best for last. Our final iteration of Studios for 2025, featuring $J, Hapazin, and VICEVERSA."
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white flex flex-col gap-6 py-5">
                            <div>
                                <h3 className="font-bold uppercase">10-11 OCTOBER 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Unofficial Niteharts Pre-Party and Afters, featuring IKU</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">25 OCTOBER 2025</h3>
                                <p className="font-medium uppercase tracking-wide">Raveyard - Our Sacramento debut with ARA B2B SLIC3R</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="Halloween Weekend 2025"
                        name="Late Night Madness"
                        desc="Who said you couldn't go feral at Seafood City?"
                        image="/images/events/two_pretty_best_friends.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white flex flex-col gap-6 py-5">
                            <div>
                                <h3 className="font-bold uppercase">17 JANUARY 2026</h3>
                                <p className="font-medium uppercase tracking-wide">Sosyal 360 — our LA debut with $J</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">6 FEBRUARY 2026</h3>
                                <p className="font-medium uppercase tracking-wide">Red Roses featuring Dani Thorne and ARA</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="21 February 2026"
                        name="New Moon"
                        desc="Our Continental Club debut, featuring $J, IKU, and headbanging lion dancers from SJSU VSA. Happy Lunar New Year!"
                        image="/images/events/lion_headbang.jpg"
                        />
                        <div className="font-helvetica max-h-140 text-ara-white flex flex-col gap-6 py-5">
                            <div>
                                <h3 className="font-bold uppercase">26 MARCH 2026</h3>
                                <p className="font-medium uppercase tracking-wide">CSUF Beyond Pre-Party with SARDONIX and CHRISPYNOY</p>
                            </div>
                        </div>
                        <TimelineCard
                        date="10 April 2026"
                        name="One Year Anniversary"
                        desc="That's how you know we made it. Our return to the Gratitude, featuring our new-generation SOSYALITES: Crashout T, DEVYN, Jimi, and SARDONIX."
                        image="/images/events/lion_headbang.jpg"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}