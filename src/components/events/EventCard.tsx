import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/src/types/event'

export default function EventCard({ event }: { event: Event }) {

    const date = new Date(event.start).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: event.timezone
    })

    const eventDate = new Date(event.start);
    const today = new Date();

    return (
        <Link href={`https://posh.vip/e/${event.url}`} target='_blank' rel='noopener noreferrer' className="cursor-target">
            <div className="group relative overflow-hidden">
                <Image
                    src={event.flyer}
                    alt={event.name}
                    width={250}
                    height={250}
                    className={`object-cover transition-all duration-300 group-hover:scale-95 group-hover:opacity-25
                        ${eventDate < today ? 'grayscale' : ''}`}
                />
                <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center tracking-wide font-helvetica uppercase text-ara-white text-sm gap-5">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <p className="font-bold">{date}</p>
                    <p className="font-bold">{event.venue.name}</p>
                </div>
            </div>
        </Link>
    )
}