import Link from "next/link";
const posts=["A practical funeral planning checklist","How vault brokerage works","What monthly vault maintenance includes","Preparing for event photography"];
export const metadata={title:"Resources"};
export default function Resources(){return <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"><p className="eyebrow text-bronze">Useful guidance</p><h1 className="display mt-5 text-7xl">Resources</h1><div className="mt-16 divide-y rule border-t rule">{posts.map((x,i)=><Link href="#" className="grid gap-4 py-7 md:grid-cols-[80px_1fr_200px]" key={x}><span className="text-xs text-bronze">0{i+1}</span><h2 className="display text-3xl">{x}</h2><span className="text-sm text-ink/50">CMS article placeholder →</span></Link>)}</div></section>}
