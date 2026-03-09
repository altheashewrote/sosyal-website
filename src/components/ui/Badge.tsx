'use client'
import { cva, type VariantProps } from 'class-variance-authority';

const badge = cva(
    'font-helvetica font-semibold tracking-tight text-sm', {
        variants: {
            intent: {
                upcoming: 'text-ara-white',
                lowTix: 'text-afters-yellow font-bold',
                soldOut: 'text-sosyal-red font-bold'
            },
        },
        defaultVariants: {
           intent: 'upcoming',
        }
    }
);

interface BadgeProps extends VariantProps<typeof badge> {
    label: string,
};

export default function Badge({ intent, label }: BadgeProps) {
    return (
        <span className={badge({ intent })}>
            {label}
        </span>
    )
};

