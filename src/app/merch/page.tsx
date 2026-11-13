import Button from "@/src/components/ui/Button";
import Link from "next/link";

export default function Merch() {
    return (
        <div className="flex flex-col min-h-screen bg-slic3r-black font-sans">
            <main className="flex flex-col min-h-screen px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 justify-center items-center animate-page-fade-in">
                <h3 className="font-outersans text-ara-white text-center text-2xl md:text-3xl">This page is under construction. <br/>
                Please check back later!</h3>
                <Link href="/" className="pt-5">
                <Button intent="primary" size="lg">Back to Home</Button>
                </Link>
            </main>
        </div>
    )
}