import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import LogoLoop from "../components/reactbit/LogoLoop";
import VideoBackground from "../components/herosect/VideoBkg";
import VideoBackgroundMerch from "../components/herosect/VideoBkgMerch";
import ScrollVelocity from "../components/reactbit/ScrollVelocity";
import VideoBackgroundEvents from "../components/herosect/VideoBkgEvents";
import CountUp from "../components/reactbit/CountUp";
import EventCard from "@/src/components/events/EventCard";
import FeaturedEventHero from "@/src/components/events/FeaturedEventHero";
import { getUpcomingEvents } from "@/src/data/events";

export const revalidate = 0;

const artistLogos = [
  { src: '/images/artists/ara_logo.png', alt: "ARA" },
  { src: '/images/artists/dani_thorne_logo.png', alt: "Dani Thorne" },
  { src: '/images/artists/DEADCROW_LOGO.svg', alt: "Deadcrow" },
  { src: '/images/artists/DEATH_CODE_LOGO.png', alt: "DEATH CODE" },
  { src: '/images/artists/DEVYN_LOGO_WHITE.svg', alt: "DEVYN" },
  { src: '/images/artists/harabaz_logo.png', alt: "Harabaz" },
  { src: '/images/artists/HBD_LOGO.png', alt: "Home By Dawn" },
  { src: '/images/artists/jimi_logo.png', alt: 'JIMI' },
  { src: '/images/artists/kale_switch_logo.png', alt: 'KALE SWITCH' }, 
  { src: '/images/artists/SARD_LOGO_SQUARE.svg', alt: "SARDONIX" },
  { src: '/images/artists/sj_logo.png', alt: '$J' },
  { src: '/images/artists/slicer_logo.png', alt: 'SLIC3R' },
  { src: '/images/artists/VASTIVE_LOGO.png', alt: 'Vastive' },
  { src: '/images/artists/vlcn_logo.png', alt: 'VLCN' },
];

export default async function Home() {
  const upcomingEvents = await getUpcomingEvents(5);
  const nearestEvent = upcomingEvents[0] ?? null;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-rave-black font-sans bg-slic3r-black dark:bg-rave-black ">
      {/* hero section */}
      <main className="relative w-screen min-h-screen overflow-hidden">
        <VideoBackground/>

        {/* content — absolutely positioned over the image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center text-white">

            {/* headline */}
            <h1 className="font-outersans wrap-anywhere hyphens-auto text-7xl lg:text-8xl font-bold top-0 text-ara-white uppercase text-center leading-none tracking-tight cursor-target">
                STAY SOSYAL.
            </h1>
            <p className="font-helvetica text-xl md:text-2xl leading-[1.3] text-pretty text-ara-white text-center tracking-[-0.3]">Setting the stage for the next generation <br/> of artists and creatives <br/> in electronic dance music.</p>

                {/* CTA button */}
            <Link href="/about" className="pt-5">
                <Button intent="primary" size="lg">Learn More</Button>
            </Link>
        </div>
        <div className='absolute bottom-10 flex flex-col gap-6 text-center w-screen'>
          <h3 className="font-jbm font-medium text-base text-ara-white">ELEVATING OVER 50+ ARTISTS WORLDWIDE</h3>
              <LogoLoop
              logos={artistLogos}
              speed={50}
              direction="left"
              logoHeight={28}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              />
        </div>
      </main>
      <section className="relative w-screen min-h-screen overflow-hidden">
        <VideoBackgroundMerch/>

        <div className='absolute top-5 text-center items-center justify-center w-screen'>
          <ScrollVelocity
          texts={['NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     ']}
          velocity={100}
          className="font-outersans font-medium tracking-[-0.25] text-4xl text-ara-white"
          
          />
        </div>

        {/* content — absolutely positioned over the image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center text-white">

            {/* headline */}
            <h1 className="font-outersans wrap-anywhere hyphens-auto text-7xl lg:text-8xl font-bold top-0 text-ara-white uppercase leading-none tracking-tight cursor-target">
              <span><p className="font-jbm text-base md:text-lg tracking-wide font-medium text-ara-white">THE SOSYAL COLLECTION: YEAR ONE</p></span>
                SOS—DZV1 "GLOBE"
            </h1>
            <p className="font-helvetica text-xl text-2xl leading-[1.3] text-pretty text-ara-white text-center tracking-[-0.3]">A fresh take on the Year One Logo. <br/> From $34.99.</p>

                {/* CTA button */}
            <Link href="/about" className="pt-5">
                <Button intent="primary" size="lg">Get 10% Off</Button>
            </Link>
        </div>

        <div className='absolute bottom-5 text-center items-center justify-center w-screen'>
          <ScrollVelocity
          texts={['NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     NEW DROP     ']}
          velocity={100}
          className="font-outersans font-medium tracking-[-0.25] text-4xl text-ara-white"
          
          />
        </div>
      </section>
      <section className="relative w-screen min-h-screen overflow-hidden">
        <VideoBackgroundEvents/>
        {nearestEvent && <FeaturedEventHero event={nearestEvent} />}
      </section>
      <section className="relative w-screen h-340 md:h-270 lg:h-200 bg-slic3r-black flex flex-col overflow-hidden pt-10 md:pt-15 items-center gap-5">
        <div className="relative w-screen flex flex-row justify-between px-5 md:px-15">
          <div className="flex flex-col gap-2">
            <h3 className="font-outersans font-medium tracking-[-0.5] text-4xl md:text-5xl text-ara-white">CREATING MOVEMENT.</h3> 
            <p className='font-helvetica tracking-[-0.3] text-lg md:text-xl max-w-150 pt-2 text-ara-white text-pretty leading-[1.3]'>Pushing the culture forward with every event, and a community of 4,500+ ravers strong.</p>
          </div>
          <Link href="https://www.instagram.com/sosyalstages/" target="_blank" rel="noopener noreferrer" className="hidden md:block shrink-0">
                <Button intent="primary" size="lg">Event Gallery</Button>
            </Link>
        </div>
        <div className="relative w-screen flex flex-row justify-between px-5 md:px-15 pt-5">
          <div className="flex flex-col">
            <CountUp
              from={0}
              to={50}
              mode="count"
              easing="easeOut"
              format="standard"
              separator=","
              prefix=""
              suffix="+"
              direction="up"
              duration={1}
              delay={0}
              trigger="view"
              replayOnHover
              className="text-4xl md:text-5xl font-bold font-helvetica text-sosyal-red"
              />
              <h3 className="text-base md:text-xl font-medium font-helvetica text-ara-white tracking-[-0.25] md:pt-1">Music Artists</h3>
          </div>
          <div className="flex flex-col">
            <CountUp
              from={0}
              to={35}
              mode="count"
              easing="easeOut"
              format="standard"
              separator=","
              prefix=""
              suffix="+"
              direction="up"
              duration={1}
              delay={0}
              trigger="view"
              replayOnHover
              className="text-4xl md:text-5xl font-bold font-helvetica text-sosyal-red"
              />
              <h3 className="text-base md:text-xl font-medium font-helvetica text-ara-white tracking-[-0.25] md:pt-1">National Acts¹</h3>
          </div>
          <div className="flex flex-col">
            <CountUp
              from={0}
              to={4500}
              mode="count"
              easing="easeOut"
              format="standard"
              separator=","
              prefix=""
              suffix="+"
              direction="up"
              duration={1}
              delay={0}
              trigger="view"
              replayOnHover
              className="text-4xl md:text-5xl font-bold font-helvetica text-sosyal-red"
              />
              <h3 className="text-base md:text-xl font-medium font-helvetica text-ara-white tracking-[-0.25] md:pt-1">SOSYALites²</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 pt-5 gap-5 relative group w-screen px-5 md:px-15 items-stretch">
          <div className="relative group md:col-span-3 rounded-sm flex flex-col md:flex-row justify-left gap-5 bg-niteharts-grey overflow-hidden p-4">
            <div className="relative group overflow-hidden rounded-sm w-full h-60 md:w-60 lg:w-60 lg:h-60 shrink-0">
              
              <Image
            src="/images/events/HTOK_01.jpg"
            alt="MADGRRL at Hard Tokyo, 09/12/2026."
            fill
            className="object-cover"
            />
            <div className="absolute top-3 left-3 py-1 px-4 rounded-full bg-black">
                <p className="text-white text-sm font-jbm uppercase">recent event</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 md:gap-0 text-left">
              <h3 className="font-helvetica text-xl text-ara-white font-bold tracking-[-0.25] leading-[1.3]">HARD TOKYO: <br/> HARD DANCE IN JAPANTOWN <br/> <span className="font-jbm text-sm tracking-wide font-medium">SAN FRANCISCO, CA</span></h3>
              <p className="font-helvetica md:text-sm md:text-base text-ara-white font-sm md:font-medium tracking-[-0.25] leading-[1.3]">Rising artists MADGRRL (EDC ‘26) and Dionysus make their way to San Francisco’s Japantown, bringing their unique take on the hard dance genre to the rapidly-growing electronic dance music community.</p>
            </div>
          </div>
          <div className="md:col-span-2 relative min-h-60">
            <div className="grid grid-cols-2 gap-5 md:absolute md:inset-0">
              <div className="relative group overflow-hidden rounded-sm min-h-60 md:min-h-0 h-full">
                <Image
              src="/images/events/PURG_01.jpg"
              alt="Crowd view of Purgatory, 10/09/2026."
              fill
              className="object-cover"
              />
              </div>
              <div className="relative group overflow-hidden rounded-sm min-h-60 md:min-h-0 h-full">
                <Image
              src="/images/events/ASNOW_01.jpg"
              alt="Lazrus at After Snow, 03/14/2026."
              fill
              className="object-cover"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden w-screen px-5 pt-5">
          <Link href="https://www.instagram.com/sosyalstages/" target="_blank" rel="noopener noreferrer">
            <Button intent="primary" size="lg">Event Gallery</Button>
          </Link>
        </div>
        <div className="flex flex-row justify-start text-left w-screen px-5 md:px-15 pt-5 items-start">
          <p className="font-jbm text-sm text-chromeangels-grey leading-[1.6] tracking-[-0.25]">¹National acts include artists with significant social media followings, fanbases, and streaming numbers. <br/> ²Based on Instagram follower growth from January to October 2026.</p>
        </div>
      </section>
      <section className="relative w-screen bg-slic3r-black flex flex-col overflow-hidden pt-10 md:pt-15 items-center gap-5 pb-15">
        <div className="relative w-screen flex flex-row justify-between px-5 md:px-15">
          <div className="flex flex-col gap-2">
            <h3 className="font-outersans font-medium tracking-[-0.5] text-4xl md:text-5xl text-ara-white">SETTING THE STAGE.</h3> 
            <p className='font-helvetica tracking-[-0.3] text-lg md:text-xl max-w-150 pt-2 text-ara-white text-pretty leading-[1.3]'>Bringing new rave concepts to life, while also reviving old favourites to bring music lovers together.</p>
          </div>
          <Link href="/events" className="hidden md:block shrink-0">
                <Button intent="primary" size="lg">Find an Event</Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pt-5 gap-5 relative w-screen px-5 md:px-15">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="md:hidden w-screen px-5 pt-5">
          <Link href="/events">
            <Button intent="primary" size="lg">Find an Event</Button>
          </Link>
        </div>
        <div className="flex flex-row justify-start text-left w-screen px-5 md:px-15 pt-5 items-start">
          <p className="font-jbm text-sm text-chromeangels-grey leading-[1.6] tracking-[-0.25]">¹Event dates and details are subject to change.</p>
        </div>
      </section>
    </div>
  );
}
