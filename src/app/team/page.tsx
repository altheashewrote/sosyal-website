import TeamCard from "@/src/components/team/TeamCard"

// defines the Team page
export default function Team() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 items-center animate-page-fade-in">
                <h2 className="font-horizon text-center text-ara-white text-3xl md:text-4xl uppercase mb-10 md:mb-16">
                    Active Team
                </h2>
                {/* TeamCards for every team member, pos=position */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-7">
                    <TeamCard
                    image='/images/team/sardinas.jpg'
                    name='@chrispynoy'
                    pos='CEO / Founder'
                    />
                    <TeamCard
                    image='/images/team/ara_press.jpg'
                    name='@djxara'
                    pos='Operation Lead / Founder'
                    />
                    <TeamCard
                    image='/images/team/YMY_6654.jpeg'
                    name='@slic3r'
                    pos='Operations'
                    />
                    <TeamCard
                    image='/images/team/001.png'
                    name='@sardonixworld'
                    pos='Creative Lead / Web Dev + UX'
                    />
                    <TeamCard
                    image='/images/team/robbie.jpg'
                    name='@itsmerobbiii'
                    pos='Production Lead'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='@xaudriii'
                    pos='Hospitality'
                    />
                    <TeamCard
                    image='/images/team/IMG_1898.jpeg'
                    name='@changwilson'
                    pos='Public Relations'
                    />
                    <TeamCard
                    image='/images/team/vowel_remover.jpg'
                    name='@medical_edm'
                    pos='Public Relations'
                    />
                    <TeamCard
                    image='/images/team/kalez01.png'
                    name='@kaleswitch'
                    pos='Project Manager'
                    />
                </div>
            </main>
        </div>
    )
}