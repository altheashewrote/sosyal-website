import Image from "next/image";
import Link from "next/link";
import { Event } from "@/src/types/event";

interface EventCardProps {
    event: Event;
    image: string;
    href: string;
}

export default function EventCard({event, image, href}: EventCardProps) {
    return (
        <Link href={href} className="cursor-target">
            <div className="group relative overflow-hidden">
                <Image
                    src={image}
                    alt={event.eventName}
                    width={250}
                    height={250}
                    className="object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-95 group-hover:opacity-25"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center tracking-wide font-helvetica uppercase text-ara-white text-sm gap-5">
                    <h3 className="font-bold text-lg">{event.eventName}</h3>
                    <p className="font-bold">featuring {event.eventHeadliner}</p>
                    <p className="font-bold">{event.eventDate} <br/> {event.eventLoc}</p>
                </div>
            </div>
        </Link>
    )
}