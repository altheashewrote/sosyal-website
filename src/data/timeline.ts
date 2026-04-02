export interface TimelineEvent {
    id: number
    date: string
    name: string
    desc: string | null
    image: string | null
}

export const timelineEvents: TimelineEvent[] = [
    { id: 1, date: "24 January 2025", name: "Boba & Bass", desc: "Where it all began, featuring the one and only SNDR.", image: "/images/events/boba_bass_01.jpg" },
    { id: 2, date: "28 February 2025", name: "Boba and Bass II, featuring SNDR and ARA B2B YK ATHENA", desc: null, image: null },
    { id: 3, date: "11 April 2025", name: "Labubass", desc: "Setting the stage for the first time at Concord's Gratitude Lounge. Featuring CHRISPYNOY, Harabaz, and DRO.", image: "/images/events/labubass_01.jpg" },
    { id: 4, date: "9 May 2025", name: "Studios Vol. 1", desc: "A series of events combining feral DJ sets with an intimate studio setting. Featuring Desert Hydra.", image: "/images/events/studios_dh_01.jpg"},
    { id: 5, date: "7 June 2025", name: "Barrio Rave, featuring YK ATHENA B2B CHRISPYNOY.", desc: null, image: null },
    { id: 6, date: "14 June 2025", name: "Prismatik, featuring Skittlez.", desc: null, image: null, },
    { id: 7, date: "4 July 2025", name: "Studios Vol. 2, featuring 2dy4 and Son of Ed.", desc: null, image: null },
    { id: 8, date: "19 July 2025", name: "Studios Vol. 3, featuring Emorfik and Re!gn.", desc: null, image: null },
    { id: 9, date: "16 August 2025", name: "Studios Vol. 4", desc: "The best for last. Featuring $J, Hapazin, and Viceversa.", image: "/images/events/studios_hz_04.jpg" },
    { id: 10, date: "7 September 2025", name: "SOSYAL Takes Over Galactic Gardens in Fresno.", desc: null, image: null },
    { id: 11, date: "9 September 2025", name: "Our Discord launches. Staying connected and SOSYAL on another level.", desc: null, image: null },
    { id: 12, date: "Niteharts Weekend 2025 (October 10-11)", name: "Pre-Party and Afters with DIY Raves, featuring IKU and Ionika.", desc: null, image: null },
    { id: 13, date: "25 October 2025", name: "Raveyard. Our Sacramento debut, featuring Heartlynx (ARA B2B SLIC3R).", desc: null, image: null },
    { id: 14, date: "Halloween Weekend 2025", name: "Late Night Madness", desc: "Who said you couldn't make bass faces at Seafood City?", image: "/images/events/ara_sfc.jpg" },
    { id: 15, date: "19 December 2025", name: "Bass City (SOLD OUT)", desc: "The culmination of months of full-sending, even when the odds seemed to be slim. Featuring DJ KANG, SHOGUN, Ground Zero, and IKU B2B CHRISPYNOY.", image: "/images/events/two_pretty_best_friends.jpg" },
    { id: 16, date: "17 January 2026", name: "SOSYAL 360. Our SoCal debut, featuring $J, IKU, and CHRISPYNOY.", desc: null, image: null },
    { id: 17, date: "6 February 2026", name: "Red Roses (SOLD OUT)", desc: "Introducing Chinatown to hard techno. Featuring Dani Thorne and ARA.", image: "/images/events/sard_and_dani.jpeg" },
    { id: 18, date: "21 February 2026", name: "New Moon (SOLD OUT)", desc: "A Lunar New Year rave, featuring $J, IKU, and headbanging lion dancers from SJSU VSA.", image: "/images/events/lion_headbang.jpg"},
    { id: 19, date: "14 March 2026", name: "After Snow (SOLD OUT)", desc: "Moshpits and filthy bass in a Filipino cultural center. Featuring VLCN, Lazrus, Harabaz, and SLIC3R.", image: "/images/events/lazrus_as1.jpg" },
    { id: 20, date: "26 March 2026", name: "We Love Fun Music @ CSU Fullerton (SOLD OUT), featuring Nikko, CHRISPYNOY, and SARDONIX.", desc: null, image: null},
    { id: 21, date: "10 April 2026", name: "One Year Anniversary", desc: "Up from here. Featuring our new-generation SOSYALites: Crashout T, DEVYN, JIMI, and SARDONIX.", image: "/images/event_cards/sosyal_anni_v01.png" }


]