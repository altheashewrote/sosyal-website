import Papa from 'papaparse'
import { Event } from '@/src/types/event'

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpFYklJckzWUVjGqyOVs5VPtQx5rHPWpzdq5VDgUnp-MmXFtKHKCx6PSLhykWXMFlXLnPkTnXy-zhH/pub?gid=0&single=true&output=csv"

export async function getSheetEvents(): Promise<Event[]> {
    const res = await fetch(SHEET_URL, { next: { revalidate: 0 } })
    const csv = await res.text()

    const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true })

    return (data as any[]).map((row, index) => ({
        id: `sheet-${index}`,
        name: row.name,
        start: row.date,
        end: row.date,
        timezone: 'America/Los_Angeles',
        status: row.status ?? 'live',
        flyer: row.flyerUrl,
        url: row.ticketUrl,          // full URL to whatever ticketing platform
        venue: {
            name: row.venue,
            address: ''
        },
        ticketGroups: [],
        shortDescription: row.desc ?? null,
        description: row.desc ?? null,
        song: null,
        source: 'sheet' as const
    }))
}

export async function getEvents(): Promise<Event[]> {
    const sheetEvents = await getSheetEvents()

    return [...sheetEvents].sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    )
}

export function getStartOfTodayPacific(): Date {
    const now = new Date()
    const pacificDateString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    const pacificDate = new Date(pacificDateString)
    pacificDate.setHours(0, 0, 0, 0)
    return pacificDate
}

/** Upcoming events from today onward, soonest first. Optionally capped. */
export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
    const events = await getEvents()
    const todaysDate = getStartOfTodayPacific()

    const upcoming = events
        .filter((event) => new Date(event.start) >= todaysDate)
        .sort((a, b) => a.start.localeCompare(b.start))

    return limit == null ? upcoming : upcoming.slice(0, limit)
}

export async function getNearestUpcomingEvent(): Promise<Event | null> {
    const events = await getUpcomingEvents(1)
    return events[0] ?? null
}

/** e.g. "FRIDAY 9 OCTOBER" */
export function formatEventHeadlineDate(event: Event): string {
    const date = new Date(event.start)
    const weekday = date.toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: event.timezone,
    })
    const day = date.toLocaleDateString('en-US', {
        day: 'numeric',
        timeZone: event.timezone,
    })
    const month = date.toLocaleDateString('en-US', {
        month: 'long',
        timeZone: event.timezone,
    })
    return `${weekday} ${day} ${month}`.toUpperCase()
}