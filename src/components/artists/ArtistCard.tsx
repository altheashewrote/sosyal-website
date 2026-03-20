import Image from "next/image";
import { Artist } from "@/src/types/artist";

interface ArtistCardProps {
    artist: Artist;
}

export default function ArtistCard({artist}: ArtistCardProps) {
    return (
        <div className="text-ara-white font-helvetica flex-col bg-transparent items-center justify-center text-center uppercase">
            <Image src='/images/artist_cards/chrispynoy_press.jpg' alt={artist.artistName} width={300} height={300} className="object-cover cursor-target"/>
            <h3 className="tracking-tight font-bold font-horizon text-xl ">{artist.artistName}</h3>
            <p className="tracking-wide text-xs">{artist.artistGenre}</p>
        </div>
    )
}