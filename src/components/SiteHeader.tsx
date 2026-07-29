"use client";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [["About", "/about"], ["Services", "/services/funeral-services"], ["Portfolio", "/portfolio"], ["Testimonials", "/testimonials"], ["Resources", "/resources"], ["Contact", "/contact"]];
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
      <Link href="/" className="flex items-baseline gap-2" aria-label="1Click Facilitators home">
        <span className="display text-3xl font-semibold">1Click</span><span className="eyebrow text-bronze">Facilitators</span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link className="text-sm text-white/75 transition hover:text-white" href={href} key={href}>{label}</Link>)}
      </nav>
      <a href="#contact" className="hidden items-center gap-2 border-l border-white/20 pl-6 text-sm md:flex"><Phone size={15}/> Speak with us</a>
      <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-white/10 px-5 py-5 lg:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-lg" href={href} key={href}>{label}</Link>)}</nav>}
  </header>;
}
