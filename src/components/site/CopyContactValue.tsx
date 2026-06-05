'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

type CopyContactValueProps = {
  label: string
  value: string
}

function CopyContactValue({ label, value }: CopyContactValueProps) {
  const [copied, setCopied] = useState(false)

  async function writeToClipboard(text: string) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text)
        return
      } catch {
        // Fall through to the textarea fallback for restricted browser contexts.
      }
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()

    const didCopy = document.execCommand('copy')
    document.body.removeChild(textarea)

    if (!didCopy) {
      throw new Error('Copy failed')
    }
  }

  async function handleCopy() {
    try {
      await writeToClipboard(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  const Icon = copied ? Check : Copy

  return (
    <button
      aria-label={`Copy ${label}: ${value}`}
      className="inline-flex size-5 shrink-0 items-center justify-center rounded-sm text-[#9AA1AB] transition-colors hover:bg-[rgba(31,41,51,0.06)] hover:text-[#1F2933] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8834D]"
      onClick={handleCopy}
      title={copied ? 'Copied' : `Copy ${label}`}
      type="button"
    >
      <Icon className="size-3.5" aria-hidden />
    </button>
  )
}

export { CopyContactValue }
