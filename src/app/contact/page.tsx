'use client'
import Button from "@/src/components/ui/Button"
import { useState } from "react"
import * as fbq from "@/src/lib/fpixel"


export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const newMsg = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMsg)
            });

            const data = await res.json();
          

            if (data.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
        fbq.event('ContactFormSubmit', {
            name,
            email,
            message,
        });
        
    };


    return (
         <div className="flex flex-col min-h-screen items-center justify-center bg-slic3r-black font-sans dark:bg-slic3r-black">
            <main className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 md:px-16 lg:px-25 pt-32 md:pt-40 py-16 md:py-32 items-center animate-page-fade-in">
                <h2 className="font-horizon text-center text-ara-white text-3xl md:text-4xl uppercase mb-10 md:mb-16">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-20">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col">
                            <p className="text-xs font-helvetica text-ara-white uppercase">Full Name</p>
                            <input type="text" required name="name" className="border border-ara-white bg-ara-white text-slic3r-black font-helvetica text-sm p-1 px-2 md:w-75"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs font-helvetica text-ara-white uppercase">Email</p>
                            <input type="text" required name="email" className="border border-ara-white bg-ara-white text-slic3r-black font-helvetica text-sm p-1 px-2 md:w-75"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs font-helvetica text-ara-white uppercase">Message</p>
                        <textarea name="message" required className="border border-ara-white bg-ara-white text-slic3r-black font-helvetica text-sm p-2 h-60 md:h-50 md:w-153 resize-none leading-none align-top"/>
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <Button intent="secondary" size="md" type="submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                        </Button>
                        {status === 'success' && (
                            <p className="font-helvetica text-green-400 text-sm uppercase tracking-wide uppercase">
                                Message sent! We&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="font-helvetica text-red-400 text-sm uppercase tracking-wide uppercase">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            </main>
        </div>
    )
}