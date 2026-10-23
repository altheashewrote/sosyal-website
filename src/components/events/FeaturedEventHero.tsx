import Link from 'next/link'
import { Event } from '@/src/types/event'
import Button from '../ui/Button'
import { formatEventHeadlineDate } from '@/src/data/events'

export default function FeaturedEventHero({ event }: { event: Event }) {
    const date = formatEventHeadlineDate(event)
    const description = event.shortDescription ?? event.description ?? ''

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center text-white">
            <h1 className="font-outersans wrap-anywhere hyphens-auto text-7xl lg:text-8xl font-bold top-0 text-ara-white uppercase leading-none tracking-tight cursor-target">
                <span>
                    <p className="font-jbm text-base md:text-lg tracking-wide font-medium text-ara-white">
                        {date}
                    </p>
                </span>
                {event.name}
            </h1>
            {description && (
                <p className="font-helvetica text-xl md:text-2xl leading-[1.3] text-pretty text-ara-white text-center tracking-[-0.3]">
                    {description}
                </p>
            )}
            {event.url && (
                <Link href={event.url} className="pt-5">
                    <Button intent="primary" size="lg">Grab Your Tickets!</Button>
                </Link>
            )}
        </div>
    )
}
