'use client'
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
    'rounded-none text-ara-white cursor-pointer', {
        variants: {
            intent: {
                primary: 'bg-sosyal-red font-horizon hover:bg-bass-blue',
                secondary: 'bg-rave-black font-helvetica border border-ara-white tracking-wider font-bold hover:border-none hover:bg-sosyal-red',
            },
            size: {
                sm:   'text-sm px-4 py-2',
                md:   'text-md px-6 py-2',
                lg:   'text-lg px-8 py-4',
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
        <button className={button({ intent, size })} {...props}/>
    )
}