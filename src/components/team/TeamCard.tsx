import Image from "next/image";

interface TeamCardProps {
    name: string,
    pos: string,
    image: string,
}

export default function TeamCard({name, pos, image}: TeamCardProps) {
    return (
        <div className="group text-ara-white font-helvetica flex-col w-full bg-transparent items-center justify-center text-center uppercase">
                <div className="relative overflow-hidden aspect-3/4 cursor-target">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-all group-hover:grayscale pb-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            <h3 className="font-bold font-helvetica text-md leading-4">{name}</h3>
            <p className="tracking-wide text-xs">{pos}</p>
        </div>
    )
}