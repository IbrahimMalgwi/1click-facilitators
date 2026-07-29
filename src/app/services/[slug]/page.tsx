import { notFound } from "next/navigation";
import Link from "next/link";
import { servicePages } from "@/lib/content";
export function generateStaticParams(){return Object.keys(servicePages).map(slug=>({slug}));}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const service=servicePages[slug as keyof typeof servicePages]; if(!service)notFound();
  const bg=service.tone==="wine"?"bg-wine":service.tone==="forest"?"bg-forest":"bg-ink";
  return <>
    <section className={`${bg} px-5 py-24 text-white md:px-10 md:py-36`}><div className="mx-auto max-w-7xl"><p className="eyebrow text-bronze">{service.kicker}</p><h1 className="display mt-6 max-w-5xl text-6xl leading-[.95] md:text-8xl">{service.label}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{service.intro}</p><Link href="/contact" className="mt-9 inline-block border border-white/35 px-6 py-4 text-sm">Discuss your requirements</Link></div></section>
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2"><div><p className="eyebrow text-bronze">What we handle</p><h2 className="display mt-5 text-5xl">Practical support,<br/>clearly scoped.</h2></div><ol className="divide-y rule border-t rule">{service.items.map((x,i)=><li className="grid grid-cols-[45px_1fr] py-5" key={x}><span className="text-xs text-bronze">0{i+1}</span><span>{x}</span></li>)}</ol></section>
    <section className="bg-stone/45 px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><p className="eyebrow text-bronze">How it works</p><h2 className="display mt-4 text-5xl">A clear way forward.</h2><div className="mt-12 grid border-t rule md:grid-cols-4">{service.steps.map((x,i)=><div className="border-b rule py-7 md:border-r md:p-7" key={x}><span className="display text-4xl text-bronze">{i+1}</span><p className="mt-12 max-w-[18rem] text-sm leading-6">{x}</p></div>)}</div></div></section>
    <section className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28"><p className="eyebrow text-bronze">Begin with a conversation</p><h2 className="display mt-5 text-5xl md:text-6xl">Tell us what needs to be handled.</h2><p className="mx-auto mt-5 max-w-xl text-ink/65">We will listen, ask the useful questions, and explain the next practical step without pressure.</p><Link href="/contact" className="mt-8 inline-block bg-ink px-7 py-4 text-white">Make an enquiry</Link></section>
  </>;
}
