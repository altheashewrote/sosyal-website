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

    const eventUrl = event.url

    const handleClick = () => {
        fbq.event('EventClick', {
            name: event.name,
            date: event.start,
            source: event.source
        });
    }

    return (
        <div className="flex flex-col bg-niteharts-grey rounded-sm overflow-hidden p-5 gap-3">
            <div className="w-full relative group aspect-[4/5] rounded-sm overflow-hidden">
                <Image
            src={event.flyer}
            alt={event.name}
            fill
            className="object-cover"
            />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-jbm font-medium text-sm uppercase text-ara-white pt-2">{date}</p>
            <h3 className="font-helvetica text-2xl font-bold text-md uppercase text-ara-white">{event.name}</h3>
            </div>
           <Link href={eventUrl}><Button intent="primary" size="md">Buy Tickets</Button></Link>
        </div>
    )
}