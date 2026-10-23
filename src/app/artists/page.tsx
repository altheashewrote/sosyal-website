import Image from "next/image";
import { getArtists } from "@/src/data/artistdata";
import ArtistsRoster from "@/src/components/artists/ArtistsRoster";

export const revalidate = 0;

// defines the Artists page
export default async function Artists() {
    const artists = await getArtists();

    return (
        <div className="flex flex-col min-h-screen bg-slic3r-black font-sans">
            <main className="flex flex-col min-h-screen px-6 sm:px-12 lg:px-15 pt-35 py-16">

                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="font-outersans font-medium tracking-[-0.5] text-4xl text-ara-white">ARTISTS</h3> 
                    <p className='font-helvetica tracking-[-0.3] text-lg max-w-150 pt-2 text-ara-white text-pretty leading-[1.3]'>We are proud to showcase a diverse roster of talented artists—local and national—who have contributed to the SOSYAL experience.</p>
                </div>

                <div className="flex flex-col lg:flex-row pt-15 gap-15 md:gap-0 justify-between">
                    <ArtistsRoster artists={artists} />
                    <div className="flex flex-col gap-5 relative group overflow-hidden">
                        <div className="relative group overflow-hidden rounded-sm aspect-square w-120 h-60"> 
                            <Image
                                src="/images/artist_cards/MAGYK.jpg"
                                alt="MAGYK Press Picture"
                                fill
                                className="object-cover"
                                />
                            <div className="absolute top-3 left-3 gap-1 flex flex-col">
                                <div className="py-1 px-4 rounded-full w-fit bg-black"><p className="text-white text-sm font-jbm uppercase">FEATURED</p></div>
                                <div className="py-1 px-4 rounded-full w-fit bg-sosyal-red"><p className="text-white text-sm font-jbm uppercase">SOSYAL ARTIST</p></div>
                            </div>
                            <div className="absolute bottom-3 left-3 gap-1 flex flex-col">
                                <h3 className="font-jbm text-ara-white uppercase font-bold text-xl">MAGYK</h3>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-sm aspect-square w-120 h-60"> 
                            <Image
                                src="/images/artist_cards/BEASTBOI.jpg"
                                alt="BEASTBOI Press Picture"
                                fill
                                className="object-cover"
                                />
                            <div className="absolute top-3 left-3 gap-1 flex flex-col">
                                <div className="py-1 px-4 rounded-full w-fit bg-black"><p className="text-white text-sm font-jbm uppercase">FEATURED</p></div>
                                <div className="py-1 px-4 rounded-full w-fit bg-sosyal-red"><p className="text-white text-sm font-jbm uppercase">NITEHARTS '26</p></div>
                            </div>
                            <div className="absolute bottom-3 left-3 gap-1 flex flex-col">
                                <h3 className="font-jbm text-ara-white uppercase font-bold text-xl">BEASTBOI</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
