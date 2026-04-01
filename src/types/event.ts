export interface Venue {
    name: string
    address: string
}

export interface TicketGroup {
    name: string
}

export interface Song {
    albumCover: string
    name: string
    artist: string
}

export interface Event {
    id: string
    name: string
    start: string
    end: string
    timezone: string
    status: string
    flyer: string
    url: string
    venue: Venue
    ticketGroups: TicketGroup[]
    shortDescription: string | null
    description: string | null
    song: Song | null
}