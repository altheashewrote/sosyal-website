import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/src/types/event'
import Button from '../ui/Button'

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
        <div className="flex flex-col border border-ara-white overflow-hidden p-5 gap-3">
            <div className="w-full relative group h-84">
                <Image
            src={event.flyer}
            alt={event.name}
            fill
            className="object-cover"
            />
            </div>
            <p className="font-helvetica font-bold text-sm uppercase text-ara-white">{date}</p>
            <h3 className="font-helvetica font-bold tracking-wider text-md uppercase text-ara-white">{event.name}</h3>
           <Link href={`https://posh.vip/e/${event.url}`}><Button intent="secondary" size="md">Buy Tickets</Button></Link>
        </div>
    )
}