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
        <Link href={href}>
            <div className="group relative overflow-hidden">
                <Image
                    src={image}
                    alt={event.eventName}
                    width={360}
                    height={450}
                    className="object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-95"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-helvetica uppercase text-ara-white text-sm gap-5">
                    <h3 className="font-semibold">{event.eventName}</h3>
                    <p className="font-light">featuring {event.eventHeadliner}</p>
                    <p className="font-light">{event.eventDate.toLocaleDateString()} <br/> {event.eventLoc}</p>
                </div>
            </div>
        </Link>
    )
}