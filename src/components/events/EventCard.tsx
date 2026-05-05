import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/src/types/event'
import Button from '../ui/Button'
import * as fbq from '@/src/lib/fpixel';

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

    const eventUrl = event.source === 'tixr' ? event.url : `https://posh.vip/e/${event.url}`;

    const handleClick = () => {
        fbq.event('EventClick', {
            name: event.name,
            date: event.start,
            source: event.source
        });
    }

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
            <p className="font-helvetica font-medium text-sm uppercase text-ara-white">{date}</p>
            <h3 className="font-helvetica-condensed text-2xl font-bold text-md uppercase text-ara-white">{event.name}</h3>
           <Link href={eventUrl}><Button intent="secondary" size="md" className="uppercase">BUY TICKETS</Button></Link>
        </div>
    )
}