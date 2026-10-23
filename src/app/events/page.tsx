import VideoBackgroundEvents from "@/src/components/herosect/VideoBkgEvents";
import FeaturedEventHero from "@/src/components/events/FeaturedEventHero";
import CopyLinkButton from "@/src/components/events/CopyLinkButton";
import EventCard from "@/src/components/events/EventCard";
import { getNearestUpcomingEvent, getUpcomingEvents } from "@/src/data/events";

export const revalidate = 0;

// defines the Events page
export default async function Events() {
    const nearestEvent = await getNearestUpcomingEvent();
    const upcomingEvents = await getUpcomingEvents();

    return (
         <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen overflow-hidden">
                <VideoBackgroundEvents/>
                {nearestEvent && <FeaturedEventHero event={nearestEvent} />}
            </main>
            <section className="relative w-screen min-h-screen pt-15 bg-slic3r-black flex flex-col overflow-hidden px-15 items-center gap-5 pb-15">
                <div className="relative w-screen flex flex-col md:flex-row gap-5 md:gap-0 justify-between px-15">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-outersans font-medium tracking-[-0.5] text-5xl text-ara-white">UPCOMING EVENTS</h3> 
                        <p className='font-helvetica tracking-[-0.3] text-xl max-w-150 pt-2 text-ara-white text-pretty leading-[1.3]'>Your next bender awaits. <br/> Events are updated every 30 minutes.</p>
                </div>
                    <div>
                        <CopyLinkButton />
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 gap-5 relative w-screen px-15">
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </div>
    )
}
