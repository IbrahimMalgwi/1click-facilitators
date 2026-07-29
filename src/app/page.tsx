import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  return <>
    <section className="relative min-h-[690px] overflow-hidden bg-ink text-white">
      <Image src="/images/editorial-hero-placeholder.png" alt="Editorial placeholder showing warm stone, walnut and ivory material details" fill priority className="object-cover object-center opacity-55 md:object-right"/>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent"/>
      <div className="relative mx-auto flex min-h-[690px] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 md:px-10 md:pb-24">
        <p className="eyebrow mb-6 text-bronze">Funerals · Memorial architecture · Events · Film</p>
        <h1 className="display max-w-4xl text-5xl font-medium leading-[.93] sm:text-7xl lg:text-[96px]">Steady guidance for life’s most important occasions.</h1>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/70">1Click Facilitators coordinates dignified farewells, vaults and mausoleums, considered celebrations, and visual stories across Lagos.</p>
          <a href="#services" className="flex items-center gap-3 text-sm text-white/80">Explore our work <ArrowDown size={17}/></a>
        </div>
      </div>
      <p className="absolute right-4 top-4 bg-ivory/90 px-3 py-2 text-[10px] uppercase tracking-wider text-ink">Editorial placeholder</p>
    </section>

    <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[.75fr_2fr]">
        <div><p className="eyebrow text-bronze">One trusted team</p><h2 className="display mt-4 text-5xl leading-none md:text-6xl">Three distinct practices.</h2></div>
        <div className="divide-y rule border-t rule">
          {[
            ["01","1Click Facilitators","Funeral direction, caskets, burial logistics, vaults and mausoleum care.","/services/funeral-services"],
            ["02","1Click Events","Weddings, birthdays, private functions and corporate occasions.","/services/events"],
            ["03","Foto1Click","Sensitive, cinematic photography and videography for every service arm.","/services/photography-videography"]
          ].map(([n,title,copy,href])=><Link href={href} key={title} className="group grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr_40px] md:items-center">
            <span className="text-xs text-bronze">{n}</span><h3 className="display text-3xl">{title}</h3><p className="text-sm leading-6 text-ink/65">{copy}</p><ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1"/>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-stone/50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.35fr]">
        <div className="min-h-[420px] bg-ink p-8 text-ivory md:p-12"><p className="eyebrow text-bronze">Founder & Director</p><div className="mt-24 border-t border-white/20 pt-6"><p className="display text-5xl">Akin<br/>Oniti</p><p className="mt-5 text-sm text-white/55">[Upload approved founder portrait]</p></div></div>
        <div className="flex flex-col justify-center"><p className="display text-4xl leading-tight md:text-6xl">“Experience matters most when families need clarity, honesty and calm.”</p><p className="mt-8 max-w-2xl leading-7 text-ink/65">Akin Oniti brings more than 15 years of funeral direction and hands-on vault expertise, including former leadership and engineering roles in Ikoyi, Lagos.</p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-y rule py-6 text-sm md:grid-cols-4"><p><b className="display block text-3xl">15+</b>years’ experience</p><p>Former MD,<br/>Vaults & Gardens</p><p>Engineer-trained<br/>vault builder</p><p>BDI Nigeria<br/>Associate</p></div>
          <Link href="/about" className="mt-8 w-fit border-b border-ink pb-1 text-sm">Read Akin’s profile →</Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
      <p className="eyebrow text-bronze">A service families can understand</p>
      <div className="mt-5 grid gap-10 md:grid-cols-2"><h2 className="display text-5xl leading-none md:text-7xl">Vault purchase, construction and care—explained plainly.</h2><div><p className="leading-7 text-ink/65">We act between families and cemeteries to verify options, coordinate documentation, oversee construction and arrange ongoing maintenance. You see the scope before committing.</p><Link href="/services/vaults-mausoleums" className="mt-8 inline-block bg-forest px-6 py-4 text-sm text-white">Understand the process</Link></div></div>
    </section>
  </>;
}
