import Link from "next/link";
import Image from "next/image";
import { Event } from "@/src/types/event";
import EventCard from "@/src/components/events/EventCard";

const mockEvents: Event[] = [
    {
        eventId: 1,
        eventName: "Sosyal 1 Year Anniversary",
        eventHeadliner: "SARDONIX, Robin So, Devyn, Jimi, and Crashout T",
        eventDate: "10 April 2026",
        eventLoc: "Gratitude Lounge, Concord",
        eventImg: '/images/event_cards/sosyal_anni_v01.png',
        eventLink: 'https://posh.vip/e/sosyal-anniversary-sosyal-hang-out',
        eventStatus: "Upcoming",
    },
    {
        eventId: 2,
        eventName: "Unchained",
        eventHeadliner: "Dionysus",
        eventDate: '18 April 2026',
        eventLoc: "Chi Lounge, SF",
        eventImg: '/images/event_cards/unchained_dion.png',
        eventLink: 'https://posh.vip/e/unchained-hard-dance-in-china-town',
        eventStatus: "Upcoming",
    },
]

export default function Events() {
    return (
         <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-25 pt-40 py-32 items-center">
                <h2 className="font-horizon text-center text-ara-white text-4xl uppercase mb-16">
                    Our Events
                </h2>
                <div className="relative items-center gap-5 flex flex-row">
                    {mockEvents.map(event => (
                        <EventCard
                        key={event.eventId}
                        event={event}
                        image={event.eventImg}
                        href={event.eventLink}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}