import Link from "next/link";
import Image from "next/image";
import { Event } from "@/src/types/event";
import EventCard from "@/src/components/events/EventCard";
import { tixrEvents } from "@/src/data/TixrEvents";

export const revalidate = 3600;

async function getPoshEvents(): Promise<Event[]> {
    const groups = [
        'SOSYALSTAGES',
        'the-loud-mouths',
        'bounce-beat-events',  // replace with their actual Posh group URL // replace with their actual Posh group URL
    ]

    const responses = await Promise.all(
        groups.map(group =>
            fetch(`https://posh.vip/api/web/v2/util/group_url/${group}`)
                .then(res => res.json())
        )
    )

    const allEvents = responses.flatMap(data => data.events ?? [])

    return allEvents.map((e: any) => ({
        id: e.id,
        name: e.name,
        start: e.start,
        end: e.end,
        timezone: e.timezone,
        status: e.status,
        flyer: e.flyer,
        url: e.url,
        venue: {
            name: e.venue?.name ?? 'TBA',
            address: e.venue?.address ?? ''
        },
        ticketGroups: e.ticketGroups?.map((tg: any) => ({ name: tg.name })) ?? [],
        shortDescription: e.shortDescription ?? null,
        description: e.description ?? null,
        song: e.song ? {
            albumCover: e.song.albumCover,
            name: e.song.name,
            artist: e.song.artist
        } : null,
        source: 'posh' as const
    }))
}

/*
async function getTixrEvents(): Promise<Event[]> {
    const res = await fetch("https://www.tixr.com/api/groups/518/events?page=3");
    const data = await res.json();

    if (!data.events) return [];

    return data.events.map((e: any) => ({
        id: String(e.id),                          // Tixr uses a number, convert to string
        name: e.name,
        start: e.formattedISOStartDate,            // "2026-06-07T04:00:00.000Z"
        end: e.formattedISOEndDate,
        timezone: e.venue?.timezone ?? 'America/Los_Angeles',
        status: e.status === 'PUBLISHED' ? 'live' : e.status.toLowerCase(),
        flyer: e.flyerUrl,                         // Tixr uses flyerUrl, not flyer
        url: e.url,                                // full URL, not just a slug
        venue: {
            name: e.venue?.name ?? 'TBA',
            address: `${e.venue?.address?.city ?? ''}, ${e.venue?.address?.state ?? ''}`.trim()
        },
        ticketGroups: e.sales?.map((s: any) => ({ name: s.category })) ?? [],
        shortDescription: null,
        description: null,
        song: null,
        source: 'tixr' as const
    }))
}
*/
async function getAllEvents(): Promise<Event[]> {
    const poshEvents = await getPoshEvents()

    return [...poshEvents, ...tixrEvents]
        .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
}

// defines the Events page
export default async function Events() {
    // events = await response from API
    const events = await getAllEvents();
    const todaysDate = new Date();

    return (
         <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 items-center animate-page-fade-in">
                <h2 className="font-horizon text-center text-ara-white text-3xl md:text-4xl uppercase mb-10 md:mb-16">
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-7">
                    {events.filter(event => new Date(event.start) >= todaysDate).
                    sort((a, b) => a.start.localeCompare(b.start)).
                    map(event => (
                        <EventCard
                        key={event.id}
                        event={event}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}