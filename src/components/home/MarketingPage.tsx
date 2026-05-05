import {
  Check,
  FileDown,
  Mail,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Warehouse,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { HomeHeroCtas } from '@/components/home/HomeHeroCtas'
import { HomeServiceDetails } from '@/components/home/HomeServiceDetails'
import { SocialLinks } from '@/components/site/SocialLinks'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { businessEmail, reportHref } from '@/lib/site-links'

type ServiceCard = {
  title: string
  summary: string
  price: string
  deliverables: string[]
}

type DetailService = ServiceCard & {
  bestFor: string
}

type Review = {
  name: string
  country: string
  category: string
  message: string
  result: string
}

const heroImage = '/images/hero-inspection.webp'
const reportImage = '/images/report-evidence.webp'
const agentImage = '/images/agent-huang-onsite-placeholder.webp'

const coreServices: ServiceCard[] = [
  {
    title: 'Start Free',
    summary: 'Quick sourcing risk check for a supplier link, quote, or first China order.',
    price: 'Free',
    deliverables: ['Supplier link review', 'Risk flags', 'Next-step recommendation'],
  },
  {
    title: 'Verify Supplier',
    summary: 'Factory check, company background review, and quote comparison.',
    price: 'From $249',
    deliverables: ['Factory vs trader check', 'Company background review', 'Clear go / caution / stop note'],
  },
  {
    title: 'Inspect & Prepare Shipment',
    summary: 'QC inspection, packaging, labels, samples, and shipment prep before goods leave China.',
    price: 'QC from $299',
    deliverables: [
      'QC photo evidence',
      'Samples from $99 + freight',
      'Packaging and label check',
      'FBA / logistics quoted separately',
    ],
  },
]

const detailServices: DetailService[] = [
  {
    title: 'Supplier shortlist / quick sourcing check',
    summary: 'Use this when you have product requirements but are not sure which supplier is real.',
    price: 'Free first review',
    bestFor: 'First-time buyers, Amazon sellers, and small importers comparing early supplier options.',
    deliverables: ['Supplier risk review', 'Quote and MOQ sanity check', 'Recommended next action'],
  },
  {
    title: 'Supplier verification',
    summary: 'A practical check before you wire a deposit or lock a new factory.',
    price: 'From $249',
    bestFor: 'New vendors, high deposit orders, or suppliers found through marketplaces.',
    deliverables: ['Factory / trader review', 'Company background review', 'Buyer-side risk summary'],
  },
  {
    title: 'Sample consolidation',
    summary: 'Send samples to one China-side hub before paying international freight.',
    price: 'From $99 + freight',
    bestFor: 'Buyers comparing samples from two or more suppliers.',
    deliverables: ['Unboxing photos or video', 'Side-by-side sample notes', 'Consolidated outbound shipment'],
  },
  {
    title: 'QC inspection',
    summary: 'Onsite product, packaging, and quantity checks before final payment.',
    price: 'From $299 / inspector day',
    bestFor: 'Pre-shipment inspections and orders where defects would hurt margin or reviews.',
    deliverables: ['Photo evidence', 'AQL-style defect list', 'Same-day issue escalation'],
  },
  {
    title: 'FBA prep and logistics',
    summary: 'China-side prep for ecommerce shipments that need labels, packaging, and coordination.',
    price: 'Custom quote',
    bestFor: 'Amazon, Walmart, DDP, private label, or multi-SKU shipments.',
    deliverables: ['Label and packaging coordination', 'Carton / SKU checks', 'Pickup / shipment coordination'],
  },
]

const trustPoints = [
  {
    title: 'No supplier-paid recommendations',
    body: 'The service fee comes from the buyer, so supplier suggestions stay aligned with your order.',
  },
  {
    title: 'No factory-paid ranking',
    body: 'Suppliers do not pay to appear better. If a risk shows up, it goes into the report.',
  },
  {
    title: 'Reports you can actually use',
    body: 'Photos, defect notes, packaging checks, and next steps you can forward internally.',
  },
]

const process = ['Send supplier or order context', 'Agent Huang checks the risk', 'Go onsite if needed', 'You decide before payment or shipment']

const reviews: Review[] = [
  {
    name: 'David R.',
    country: 'United States',
    category: 'Home hardware',
    message:
      'Agent Huang checked packaging and carton-label photos before we paid the balance. One carton label was wrong, so we asked the supplier to fix it before pickup.',
    result: 'Balance payment protected',
  },
  {
    name: 'Sophie M.',
    country: 'Germany',
    category: 'Consumer electronics',
    message:
      'The factory said the order was ready for pickup. The onsite check showed missing cartons and mixed labels, so we delayed collection until the count matched the packing list.',
    result: 'Delay caught before pickup',
  },
  {
    name: 'Marcus T.',
    country: 'Australia',
    category: 'Private-label goods',
    message:
      'We had four suppliers with similar quotes. Agent Huang compared samples, MOQ details, and factory risk notes, then showed why one supplier was safer for the first order.',
    result: 'Supplier shortlist reduced from 4 to 1',
  },
]

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <Search className="size-5" key="search" />,
    <Warehouse className="size-5" key="warehouse" />,
    <PackageCheck className="size-5" key="package" />,
  ]
  return icons[index] ?? icons[0]
}

export function MarketingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader
        activePage="home"
        topBanner="China-side sourcing, supplier checks, QC inspection, and shipment prep — aligned with the buyer."
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_82%_14%,rgba(220,38,38,0.06),rgba(15,23,42,0.035)_34%,transparent_62%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:py-20">
          <div className="min-w-0 lg:col-span-6">
            <p className="max-w-[18rem] break-words text-xs font-semibold leading-6 text-red-600 sm:max-w-full sm:text-sm">
              Sourcing · Supplier verification · QC inspection · Sample consolidation · FBA prep
            </p>
            <h1 className="mt-4 max-w-[18rem] break-words text-balance text-[2.12rem] font-bold leading-[1.1] tracking-tight text-slate-950 sm:max-w-full sm:text-5xl lg:text-[3.35rem]">
              Independent China sourcing, supplier checks, and QC inspection — aligned with you.
            </h1>
            <p className="mt-5 max-w-[18rem] break-words text-[15px] leading-7 text-slate-600 sm:max-w-2xl sm:text-lg sm:leading-8">
              Huang Sourcing helps overseas buyers find suppliers, verify factories, inspect products,
              consolidate samples, and prepare shipments in China — before money is sent or goods leave the factory.
            </p>
            <div className="mt-8">
              <HomeHeroCtas
                primaryLabel="Talk to Agent Huang"
                secondaryLabel="Download sample report"
              />
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 border-y border-slate-200 py-5 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-slate-950">10+ yrs</p>
                <p className="mt-1 text-xs font-medium leading-tight text-slate-500">China supply-chain experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">24h</p>
                <p className="mt-1 text-xs font-medium leading-tight text-slate-500">Standard reply target</p>
              </div>
              <div>
                <p className="text-xl font-bold leading-tight text-slate-950">No supplier-paid recommendations</p>
                <p className="mt-1 text-xs font-medium leading-tight text-slate-500">Recommendations stay buyer-aligned</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3] min-h-[300px]">
                <Image
                  alt="Agent Huang checking products and shipment labels in a warehouse"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50" id="services">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need before paying a Chinese supplier.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Start with a quick free check, then add verification, inspection, samples, or logistics support only when the order risk justifies it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coreServices.map((service, index) => (
              <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={service.title}>
                <div className="flex size-10 items-center justify-center rounded-md bg-slate-950 text-white">
                  <ServiceIcon index={index} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
                <p className="mt-4 text-lg font-bold text-red-600">{service.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.deliverables.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <Check className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <HomeServiceDetails services={detailServices} />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" id="integrity">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">Buyer-aligned by design</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Paid by the buyer. Not by the factory.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Some platforms earn money from supplier exposure. Huang Sourcing is different:
              our service fee comes from the buyer, so recommendations stay aligned with your order.
            </p>
          </div>
          <div className="grid gap-3 lg:col-span-7">
            {trustPoints.map((point) => (
              <article className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5" key={point.title}>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-red-600 shadow-sm">
                  <ShieldCheck className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-red-300">Sample report</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              See what your report will look like before you book.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The sample report shows the kind of photo evidence, defect notes, packaging checks,
              and practical decision points you should expect before paying a supplier.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              {['Factory details', 'On-site photos', 'QC findings', 'Packaging / label check'].map((item) => (
                <li className="flex gap-2" key={item}>
                  <Check className="mt-0.5 size-4 shrink-0 text-red-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-7 h-11 rounded-md bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700"
            >
              <a href={reportHref}>
                <FileDown className="size-4" />
                Download sample report
              </a>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <Image
                  alt="Inspection report pages with defect photos, checklist, barcode labels, and red pen"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={reportImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  alt="Agent Huang onsite in a warehouse with cartons and inspection clipboard"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src={agentImage}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-red-600">A real person on the China side</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Talk to Agent Huang before you send money.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I work on the China side for overseas buyers who need someone to check suppliers,
              compare quotes, inspect products, and communicate with factories before they commit.
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {process.map((step, index) => (
                <li className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700" key={step}>
                  <span className="font-bold text-red-600">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50" id="proof">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Buyer feedback from practical cases.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Short, specific outcomes from buyers who needed supplier checks, sample comparison, or pre-shipment evidence.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={review.name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-slate-950">{review.name}</p>
                    <p className="text-sm text-slate-500">
                      {review.country} · {review.category}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                    Buyer case
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">&ldquo;{review.message}&rdquo;</p>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-bold text-red-600">
                  {review.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-lg border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Need someone to check a supplier this week?</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier name, product, factory location, order value, and deadline.
                Agent Huang will suggest the safest next step.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <ContactAgentButton
                className="h-11 rounded-md bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700"
                size="default"
                variant="default"
              >
                Talk to Agent Huang
              </ContactAgentButton>
              <Button
                asChild
                className="h-11 rounded-md border-white/20 bg-white px-6 text-sm font-bold text-slate-950 hover:bg-slate-100"
                variant="outline"
              >
                <a href={reportHref}>
                  <FileDown className="size-4" />
                  Download sample report
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold text-slate-950">Huang Sourcing</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Buyer-side sourcing, supplier verification, QC inspection, sample consolidation,
              and China-side shipment support for overseas buyers.
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-950">
              Based in China · Replies within 24 hours on working days
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact</p>
            <a className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-red-600" href={`mailto:${businessEmail}`}>
              <Mail className="size-4" />
              Email: {businessEmail}
            </a>
            <SocialLinks className="mt-4" showSupportingLabel />
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="size-4" />
              Shanghai base · Nationwide China
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick links</p>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">
              <Link className="hover:text-red-600" href="/about">About Agent Huang</Link>
              <a className="hover:text-red-600" href="#services">Services</a>
              <a className="hover:text-red-600" href="#proof">Reviews</a>
              <a className="hover:text-red-600" href={reportHref}>Sample report</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Huang Sourcing. Buyer-side support in China.
        </div>
      </footer>
    </main>
  )
}
