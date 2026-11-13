'use client';

import Link from "next/link";
import { useState } from "react";
import { Artist } from "@/src/types/artist";

interface ArtistsRosterProps {
    artists: Artist[];
}

export default function ArtistsRoster({ artists }: ArtistsRosterProps) {
    const [year, setYear] = useState(1);

    return (
        <div className="flex flex-col md:items-start gap-10">
            <div className="flex flex-row gap-6 md:gap-15 justify-center md:justify-start w-full shrink-0">
                <button
                    onClick={() => setYear(1)}
                    className={`uppercase font-jbm cursor-pointer font-bold hover:text-ara-white text-base md:text-sm text-center md:text-left ${year === 1 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                >
                    Year One
                </button>
                <button
                    onClick={() => setYear(2)}
                    className={`uppercase font-jbm cursor-pointer font-bold hover:text-ara-white text-base md:text-sm text-center md:text-left ${year === 2 ? 'text-ara-white' : 'text-chromeangels-grey'}`}
                >
                    Year Two
                </button>
            </div>

            <div className="columns-1 md:columns-3 text-center md:text-left items-center md:items-start gap-x-40 justify-between w-full flex-wrap">
                {artists
                    .filter(artist => artist.year === year)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(artist => (
                        <Link href={artist.link || '#'} key={artist.id} target="_blank" rel="noopener noreferrer">
                            <h3
                                className="font-jbm text-ara-white hover:text-sosyal-red uppercase font-bold text-lg md:text-sm mb-2 break-inside-avoid"
                            >
                                {artist.name}
                            </h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
