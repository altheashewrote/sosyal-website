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
        <div className="group flex flex-row justify-between relative border border-chromeangels-grey aspect-video max-w-140 cursor-target overflow-hidden">
            <div className="group relative border border-chromeangels-grey overflow-hidden w-60 items-start justify-start">
                <Image
                src={image}
                alt={desc}
                fill
                className="object-cover transition-all group-hover:grayscale"
                />
            </div>
            <div className="border border-chromeangels-grey text-ara-white text-left w-78 flex flex-col gap-3 p-7">
                <h2 className="font-horizon text-2xl">{date}</h2>
                <h3 className="font-helvetica font-bold text-xl uppercase tracking-wide">{name} </h3>
                <p className="font-helvetica font-light text-sm tracking-wider text-wrap">{desc}</p>
            </div>
        </div>
    )
}
