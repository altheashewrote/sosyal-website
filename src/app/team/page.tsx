import TeamCard from "@/src/components/team/TeamCard"

export default function Team() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-10 pt-40 py-32 items-center animate-page-fade-in">
                <h2 className="font-horizon text-center text-ara-white text-4xl uppercase mb-16">
                    Our Team
                </h2>
                <div className="grid grid-cols-5 gap-10">
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Chris Valiente'
                    pos='Operations'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Ara Manuel'
                    pos='Events'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Donovan Yang'
                    pos='Events'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Robbie Ayala'
                    pos='Production'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Adriana Fazlee'
                    pos='A&R and Hospitality'
                    />
                    <TeamCard
                    image='/images/team/001.png'
                    name='Althea Rosales'
                    pos='UX and Visual Design'
                    />
                    <TeamCard
                    image='/images/team/chrispynoy_press.jpg'
                    name='Wilson Chang'
                    pos='Public Relations'
                    />
                    <TeamCard
                    image='/images/team/SOYSAL_IDP_LNY7.jpg'
                    name='Kaili Shan'
                    pos='Merchandise'
                    />
                </div>
            </main>
        </div>
    )
}