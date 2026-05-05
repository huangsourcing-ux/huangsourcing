'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { submitConsultationInquiry } from '@/actions/submitConsultationInquiry'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { en } from '@/content/en'
import { businessEmail, publicWhatsAppHref, reportHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  sourcing: z.string().min(5).max(4000),
  headache: z.string().min(5).max(4000),
})

type FormValues = z.infer<typeof formSchema>

const c = en.ContactAgent

type ContactAgentDialogProps = {
  className?: string
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
  children: React.ReactNode
}

const ContactAgentDialog = ({ className, size, variant, children }: ContactAgentDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { sourcing: '', headache: '' },
  })

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const result = await submitConsultationInquiry(values)
      if (result.ok) {
        setIsSuccess(true)
        reset()
        return
      }
      if (result.fieldErrors?.sourcing) {
        setError('sourcing', { message: result.fieldErrors.sourcing })
      }
      if (result.fieldErrors?.headache) {
        setError('headache', { message: result.fieldErrors.headache })
      }
      if (result.message) {
        setError('root', { message: result.message })
      }
    })
  }

  const openChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setIsSuccess(false)
      reset()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={openChange}>
      <DialogTrigger asChild>
        <Button type="button" className={cn(className)} size={size} variant={variant}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        {isSuccess ? (
          <div className="space-y-4 pt-2">
            <DialogHeader>
              <DialogTitle>{c.successTitle}</DialogTitle>
              <DialogDescription>{c.successDescription}</DialogDescription>
            </DialogHeader>
            <Button
              asChild
              className="h-10 w-full rounded-md bg-foreground text-background hover:bg-foreground/90"
            >
              <a href={reportHref} download>
                {c.downloadReport}
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              {c.preferHuman}{' '}
              <a
                className="font-medium text-foreground underline-offset-4 hover:underline"
                href={`mailto:${businessEmail}`}
              >
                {c.email}
              </a>
              {' · '}
              <a
                className="font-medium text-foreground underline-offset-4 hover:underline"
                href={publicWhatsAppHref}
                rel="noreferrer"
                target="_blank"
              >
                {c.whatsapp}
              </a>
            </p>
          </div>
        ) : (
          <form className="space-y-4 pt-1" onSubmit={handleSubmit(onSubmit)} noValidate>
            <DialogHeader>
              <DialogTitle>{c.beforeCallTitle}</DialogTitle>
              <DialogDescription>{c.beforeCallDescription}</DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <Label htmlFor="sourcing">{c.labelSourcing}</Label>
              <Textarea
                id="sourcing"
                className="min-h-[80px] resize-y"
                autoComplete="off"
                placeholder={c.placeholderSourcing}
                {...register('sourcing')}
                aria-invalid={Boolean(errors.sourcing)}
              />
              {errors.sourcing ? (
                <p className="text-sm text-destructive">{errors.sourcing.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="headache">{c.labelHeadache}</Label>
              <Textarea
                id="headache"
                className="min-h-[100px] resize-y"
                placeholder={c.placeholderHeadache}
                {...register('headache')}
                aria-invalid={Boolean(errors.headache)}
              />
              {errors.headache ? (
                <p className="text-sm text-destructive">{errors.headache.message}</p>
              ) : null}
            </div>
            {errors.root ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.root.message}
              </p>
            ) : null}
            <Button
              className="h-10 w-full rounded-md bg-foreground text-background hover:bg-foreground/90"
              disabled={isPending}
              type="submit"
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  {c.sending}
                </>
              ) : (
                c.submit
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              {c.reachWithoutForm}{' '}
              <a className="underline-offset-2 hover:underline" href={`mailto:${businessEmail}`}>
                {businessEmail}
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { ContactAgentDialog }
