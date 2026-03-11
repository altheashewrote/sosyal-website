'use client';
import Image from "next/image";

interface TimelineCardProps {
    date: string,
    name: string,
    desc: string,
    image: string,
}

// todo: comment out all hovers on main div!
export default function TimelineCard({date, name, desc, image}: TimelineCardProps) {
    return (
        <div className="group relative w-screen h-50 overflow-hidden cursor-target">
            <Image
            src={image}
            alt={desc}
            fill
            className="object-cover transition-all group-hover:grayscale"
            />
            <div className="absolute inset-0 flex flex-row justify-between text-ara-white px-20 py-10 items-center">
                <div className="font-horizon text-4xl max-w-30 text-wrap">
                    <h3>{date}</h3>
                </div>
                <div className="text-right flex flex-col gap-2 justify-end max-w-70 text-wrap">
                    <h3 className="font-horizon text-3xl">{name}</h3>
                    <p className="font-helvetica text-sm uppercase font-bold tracking-wider">{desc}</p> 
                </div>
            </div>
        </div>
    )
}
