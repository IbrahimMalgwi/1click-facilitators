import Link from "next/link";
import { contact } from "@/lib/content";
export function SiteFooter() {
  return <footer id="contact" className="bg-ink px-5 pb-28 pt-16 text-white md:px-10 md:pb-10">
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><p className="display text-4xl">One experienced hand,<br/>from first call to final detail.</p><Link className="mt-8 inline-block border-b border-bronze pb-1 text-bronze" href="/contact">Start a conversation →</Link></div>
      <div><p className="eyebrow mb-5 text-white/45">Service arms</p><div className="space-y-3 text-sm text-white/70"><p>1Click Facilitators</p><p>1Click Events</p><p>Foto1Click</p></div></div>
      <div><p className="eyebrow mb-5 text-white/45">Contact</p><div className="space-y-3 text-sm text-white/70"><p>{contact.phone}</p><p>{contact.email}</p><p>{contact.address}</p></div></div>
    </div><div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} 1Click Facilitators · Lagos, Nigeria</div>
  </footer>;
}
