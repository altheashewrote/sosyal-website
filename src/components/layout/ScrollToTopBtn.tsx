'use client'
import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTop && (
                <button
                    className="bg-slic3r-black font-helvetica cursor-pointer font-bold text-sm text-ara-white border border-ara-white hover:bg-sosyal-red uppercase fixed bottom-6 right-6 px-4 py-2 z-50"
                    onClick={scrollUp}
                >
                    Back To Top
                </button>
            )}
        </div>
    )
}