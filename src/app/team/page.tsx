import TeamCard from "@/src/components/team/TeamCard"

export default function Team() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 items-center animate-page-fade-in">
                <h2 className="font-horizon text-center text-ara-white text-3xl md:text-4xl uppercase mb-10 md:mb-16">
                    Our Team
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-7">
                    <TeamCard
                    image='/images/team/sardinas.jpg'
                    name='Chris Valiente'
                    pos='Operations, Artist'
                    />
                    <TeamCard
                    image='/images/team/ara_press.jpg'
                    name='Ara Manuel'
                    pos='Events, Artist'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Donovan Yang'
                    pos='Events, Artist'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Robbie Ayala'
                    pos='Production, Artist'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Adriana Fazlee'
                    pos='A&R and Hospitality'
                    />
                    <TeamCard
                    image='/images/team/001.png'
                    name='Althea Rosales'
                    pos='Web Dev/UX, Design, Artist'
                    />
                    <TeamCard
                    image='/images/team/IMG_1898.jpeg'
                    name='Wilson Chang'
                    pos='Public Relations'
                    />
                    <TeamCard
                    image='/images/team/vowel_remover.jpg'
                    name='Kevin Cervantes'
                    pos='Public Relations'
                    />
                    <TeamCard
                    image='/images/team/SOYSAL_IDP_LNY7.jpg'
                    name='Kaili Shan'
                    pos='Merchandise, Artist'
                    />
                </div>
            </main>
        </div>
    )
}