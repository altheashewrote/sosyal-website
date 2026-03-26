// src/components/about/TimelineCard.tsx
'use client'
import Image from 'next/image'
import { TimelineEvent } from '@/src/data/timeline'

interface TimelineCardProps {
    event: TimelineEvent
    side: 'left' | 'right'
}

export default function TimelineCard({ event, side }: TimelineCardProps) {
    // text-only event (no image)
    if (!event.image) {
        return (
            <div className={`
                relative flex w-full
                md:w-1/2 md:pr-16
                ${side === 'right' ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:pl-50 text-right md:pr-0'}
            `}>
                {/* dot on the center line */}
                <div className={`
                    hidden md:block absolute top-2 w-2 h-2 rounded-full bg-chromeangels-grey
                    ${side === 'left' ? '-right-1' : '-left-1'}
                `} />
                <div className="font-helvetica text-ara-white flex flex-col gap-0.5">
                    <h3 className="font-bold uppercase tracking-wide text-md">{event.date}</h3>
                    <p className="font-medium uppercase tracking-wide text-md">{event.name}</p>
                </div>
            </div>
        )
    }

    // full card with image
    return (
        <div className={`
            relative flex w-full
            md:w-1/2
            ${side === 'left' ? 'md:pr-16' : 'md:ml-auto md:pl-16'}
        `}>
            {/* dot on the center line */}
            <div className={`
                hidden md:block absolute top-6 w-2 h-2 rounded-full bg-ara-white
                ${side === 'left' ? '-right-1' : '-left-1'}
            `} />

            {/* card */}
            <div className="group flex flex-row w-full border border-chromeangels-grey overflow-hidden cursor-target">
                {/* image */}
                <div className="relative w-32 sm:w-48 shrink-0">
                    <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover transition-all group-hover:grayscale"
                    />
                </div>
                {/* text */}
                <div className="flex flex-col gap-2 p-4 sm:p-6 text-ara-white">
                    <h2 className="font-horizon text-lg sm:text-2xl">{event.date}</h2>
                    <h3 className="font-helvetica font-bold text-sm sm:text-base uppercase tracking-wide">{event.name}</h3>
                    <p className="font-helvetica font-light text-xs sm:text-sm tracking-wider">{event.desc}</p>
                </div>
            </div>
        </div>
    )
}