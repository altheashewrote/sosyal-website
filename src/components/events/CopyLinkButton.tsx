'use client'

import { useState } from 'react'
import Button from '@/src/components/ui/Button'

export default function CopyLinkButton() {
    const [copied, setCopied] = useState(false)

    const copyCurrentUrl = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Could not copy text: ', err)
        }
    }

    return (
        <Button
            intent="secondary"
            size="sm"
            className="font-jbm"
            onClick={copyCurrentUrl}
        >
            {copied ? 'Copied!' : 'Copy Link'}
        </Button>
    )
}
