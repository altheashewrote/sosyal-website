type EventStatus = "Upcoming" | "Low Tickets" | "Sold Out" | "Cancelled"

export interface Event {
    readonly eventId: number,
    eventName: string,
    eventLoc: string,
    eventImg: string,
    eventLink: string,
    eventHeadliner: string,
    eventDate: string,
    eventStatus: EventStatus,
}

