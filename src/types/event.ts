type EventStatus = "Upcoming" | "Low Tickets" | "Sold Out" | "Cancelled"

export interface Event {
    readonly eventId: number,
    eventName: string,
    eventLoc: string,
    eventHeadliner: string,
    eventDate: Date,
    eventStatus: EventStatus,
}
