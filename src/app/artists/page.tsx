'use client';
import Link from "next/link";
import Image from "next/image";
import { Artist } from "@/src/types/artist";
import { ArtistList } from "@/src/data/artists";
import ArtistCard from "@/src/components/artists/ArtistCard";
import { useState } from "react";


export default function Artists() {
    const [year, setYear] = useState(1);

    return (
        <div className="flex flex-col min-h-screen bg-slic3r-black font-sans">
            <main className="flex flex-col min-h-screen px-25 py-32">

                {/* heading */}
                <h2 className="font-horizon text-center text-ara-white text-4xl uppercase mb-16">
                    Past Artists
                </h2>

                {/* two-column layout: buttons left, grid right */}
                <div className="flex flex-row gap-20 items-start">

                    {/* left column — year filters, fixed width so they never move */}
                    <div className="flex flex-col gap-2 w-32 shrink-0">
                        <button
                            onClick={() => setYear(1)}
                            className={`uppercase tracking-wider font-helvetica cursor-target font-bold text-md text-left ${year === 1 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                        >
                            Year One
                        </button>
                        <button
                            onClick={() => setYear(2)}
                            className={`uppercase tracking-wider font-helvetica cursor-target font-bold text-md text-left ${year === 2 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                        >
                            Year Two
                        </button>
                    </div>

                    {/* right column — artist grid, always starts in same position */}
                    <div className="grid grid-cols-4 gap-x-35 gap-y-2">
                        {ArtistList
                            .filter(artist => artist.artistYear === year)
                            .sort((a, b) => a.artistName.localeCompare(b.artistName))
                            .map(artist => (
                                <h3
                                    key={artist.artistId}
                                    className="font-helvetica text-ara-white uppercase tracking-wider font-bold text-md"
                                >
                                    {artist.artistName}
                                </h3>
                            ))
                        }
                    </div>

                </div>
            </main>
        </div>
    )
}