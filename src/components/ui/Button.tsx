'use client'
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
    'rounded-full text-ara-white cursor-pointer', {
        variants: {
            intent: {
                primary: 'bg-ara-white font-helvetica text-slic3r-black tracking-[-0.3] font-medium hover:bg-sosyal-red hover:text-ara-white',
                secondary: 'bg-rave-black font-helvetica border border-ara-white font-bold hover:border-none hover:bg-sosyal-red',
            },
            size: {
                sm:   'text-sm px-4 py-2',
                md:   'text-md px-6 py-2',
                lg:   'text-2xl px-10 py-2',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export default function Button({ intent, size, className, ...props}: ButtonProps) {
    return (
        <button className={button({ intent, size, className })} {...props}/>
    )
}