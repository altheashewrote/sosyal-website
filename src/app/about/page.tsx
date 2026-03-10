import Link from "next/link"
import Image from "next/image"
import ScrollVelocity from "@/src/components/reactbit/ScrollVelocity"


export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen h-screen gap-15 items-center">
                <div className="relative inset-y-35 items-center justify-center pb-35">
                    <ScrollVelocity
                    texts={['setting the stage  ']}
                    velocity={100}
                    className="text-ara-white font-helvetica items-center uppercase"
                    />
                </div>
                <div className="relative flex flex-row justify-between gap-5 p-20">
                    <div className="flex flex-col max-w-108 font-helvetica text-ara-white text-sm tracking-wide text-wrap">
                        <h3 className="uppercase font-bold">everything in your track should have a purpose.</h3>
                        <h3 className="uppercase font-light">–ISOxo <br/> <br/> </h3>
                        <p className="font-regular">We live by this quote every single day of our lives. <br/><br/>
                        From our starting point at a boba shop in early 2025,
                        we've stopped at nothing to ensure that artists and music lovers find community through electronic dance music. 
                        We recognise that PLURR (peace, love, unity, respect, and responsibility) are at the forefront of rave culture; as such, we
                        plan our events meticulously so as to amplify underrepresented voices, introduce new ways of experiencing EDM to the community, and unite people from all walks of life.
                        <br/><br/>
                        We acknowledge that the EDM scene was built on anti-racism and anti-capitalism, pioneered by people of colour, LGBTQIA+ people, and neurodivergent people desiring a safe space for free expression.
                        As a collective founded by Filipinos, we refuse to be one-dimensional, crafting each space with diversity, community advocacy, and chosen family in mind.
                        
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <Image
                        src="/images/events/two_pretty_best_friends.jpg"
                        alt="Serving as usual at Bass City, 12/19/2025"
                        width={500}
                        height={500}
                        className="object-cover cursor-target hover:grayscale transition-all"
                        />
                    </div>
                </div>
            </main>
            <section>
                
            </section>
        </div>
    )
}