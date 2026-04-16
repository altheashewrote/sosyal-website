'use client';
import Link from "next/link";
import Image from "next/image";
import { Artist } from "@/src/types/artist";
import { ArtistList } from "@/src/data/artists";
import ArtistCard from "@/src/components/artists/ArtistCard";
import { useState } from "react";

// defines the Artists page
export default function Artists() {
    /*sets default year to Year One -> for Year One artists*/
    const [year, setYear] = useState(1);

    return (
        <div className="flex flex-col min-h-screen bg-slic3r-black font-sans">
            <main className="flex flex-col min-h-screen px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 animate-page-fade-in">

                <h2 className="font-horizon text-center text-ara-white text-3xl md:text-4xl uppercase mb-10 md:mb-16">
                    Past Artists
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-35">

                    <div className="flex flex-row md:flex-col gap-6 md:gap-2 w-full md:w-32 shrink-0">
                        <button
                            onClick={() => setYear(1)}
                            className={`uppercase font-helvetica cursor-pointer font-bold hover:text-ara-white text-md text-left ${year === 1 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                        >
                            Year One
                        </button>
                        <button
                            onClick={() => setYear(2)}
                            className={`uppercase font-helvetica cursor-pointer font-bold hover:text-ara-white text-md text-left ${year === 2 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                        >
                            Year Two
                        </button>
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-3 xl:columns-4 gap-x-8 lg:gap-x-35 w-full flex-wrap">
                        {ArtistList
                            .filter(artist => artist.artistYear === year)
                            .sort((a, b) => a.artistName.localeCompare(b.artistName))
                            .map(artist => (
                                <h3
                                    key={artist.artistId}
                                    className="font-helvetica text-ara-white uppercase font-bold text-md mb-2 break-inside-avoid"
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