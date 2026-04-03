'use client'
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import LogoLoop from "../components/reactbit/LogoLoop";
import VideoBackground from "../components/herosect/VideoBkg";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopBtn from "../components/layout/ScrollToTopBtn";

const artistLogos = [
  { src: '/images/artists/ara_logo.png', alt: "ARA" },
  { src: '/images/artists/chrispynoy_logo.png', alt: "CHRISPYNOY" },
  { src: '/images/artists/dani_thorne_logo.png', alt: "Dani Thorne" },
  { src: '/images/artists/dj_kang_logo.png', alt: 'DJ KANG' },
  { src: '/images/artists/harabaz_logo.png', alt: "Harabaz" },
  { src: '/images/artists/jimi_logo.png', alt: 'JIMI' },
  { src: '/images/artists/kale_switch_logo.png', alt: 'KALE SWITCH' }, 
  { src: '/images/artists/sardonix_logo.png', alt: "SARDONIX" },
  { src: '/images/artists/shareatonin_logo.png', alt: "Shareatonin" },
  { src: '/images/artists/sj_logo.png', alt: '$J' },
  { src: '/images/artists/slicer_logo.png', alt: 'SLIC3R' },
  { src: '/images/artists/vlcn_logo.png', alt: 'VLCN' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-rave-black font-sans bg-slic3r-black dark:bg-rave-black">
      {/* hero section */}
      <main className="relative w-screen min-h-screen overflow-hidden">
        <VideoBackground/>

        <div className="absolute inset-0 bg-black opacity-30"/>

        {/* content — absolutely positioned over the image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 text-center text-white">

            {/* headline */}
            <h1 className="font-horizon text-5xl md:text-6xl top-0 text-ara-white uppercase leading-none tracking-tight cursor-target">
                SETTING<br />THE<br />STAGE
            </h1>

                {/* CTA button */}
            <Link href="/about" className="cursor-target">
                <Button intent="primary" size="lg">LEARN MORE</Button>
            </Link>
        </div>
        <div className='absolute bottom-10 flex flex-col gap-6 text-center w-screen'>
          <h3 className="font-helvetica font-bold text-lg text-ara-white tracking-wider">ARTISTS THAT PLAYED FOR US</h3>
              <LogoLoop
              logos={artistLogos}
              speed={100}
              direction="left"
              logoHeight={35}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              />
        </div>
      </main>
      <section className="relative w-screen min-h-screen bg-slic3r-black flex flex-col overflow-hidden p-8 lg:p-17 gap-5">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-horizon text-2xl md:text-3xl text-ara-white text-center cursor-target">TAKING BACK WHAT<br/> BELONGS TO US.</h2>
          <p className="font-helvetica text-md text-ara-white text-center uppercase font-bold tracking-wider">Bringing music lovers together, from boba shops to big venues.</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-10 sm:gap-16 lg:gap-40 p-6 sm:p-10 w-full max-w-5xl">
            <div className="flex flex-col items-center sm:items-start cursor-target">
              <h3 className="font-horizon text-sosyal-red text-5xl">40+</h3>
              <p className="font-helvetica font-semibold tracking-wider uppercase text-ara-white">artists</p>
            </div>
            <div className="flex flex-col items-center sm:items-start cursor-target">
              <h3 className="font-horizon text-sosyal-red text-5xl">20+</h3>
              <p className="font-helvetica font-semibold tracking-wider uppercase text-ara-white">venues & collectives</p>
            </div>
            <div className="flex flex-col items-center sm:items-start cursor-target">
              <h3 className="font-horizon text-sosyal-red text-5xl">2500+</h3>
              <p className="font-helvetica font-semibold tracking-wider uppercase text-ara-white">sosyalites</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5 lg:gap-7">
          <div className="overflow-hidden cursor-target">
            <Image
            src='/images/events/lion_headbang.jpg'
            alt="Lion Headbanging at LNY 2/21/26"
            width={250}
            height={250}
            className="object-cover hover:grayscale transition-all"
            />
          </div>
          <div className="overflow-hidden cursor-target">
            <Image
            src='/images/events/three_pretty_best_friends.jpg'
            alt="Two besties slaying at Bass City 12/19/25"
            width={250}
            height={250}
            className="object-cover hover:grayscale transition-all"
            />
          </div>
          <div className="overflow-hidden cursor-target">
            <Image
            src='/images/events/lny_4people_redbkg.jpg'
            alt="Our homie donning a bass face at Bass City 12/19/25"
            width={250}
            height={250}
            className="object-cover hover:grayscale transition-all"
            />
          </div>
          <div className="overflow-hidden cursor-target">
            <Image
            src='/images/events/moshpit_lny.jpg'
            alt="Our homie donning a bass face at Bass City 12/19/25"
            width={250}
            height={250}
            className="object-cover hover:grayscale transition-all"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
