import Image from "next/image";
import { Artist } from "@/src/types/artist";

interface ArtistCardProps {
    artist: Artist;
    image: string;
}

export default function ArtistCard({artist, image}: ArtistCardProps) {
    return (
        <div className="text-ara-white font-helvetica flex-col gap-3 px-6 py-4 bg-transparent">
            <Image src={image} alt={artist.artistName} width={300} height={300} className="object-cover"/>
            <h3 className="tracking-tight font-md">{artist.artistName}</h3>
            <p className="tracking-wide font-sm">{artist.artistGenre}</p>
        </div>
    )
}