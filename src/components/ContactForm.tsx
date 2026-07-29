"use client";
import { useState } from "react";
export function ContactForm() {
  const [sent,setSent]=useState(false);
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault(); const form=e.currentTarget; const data=Object.fromEntries(new FormData(form)); const res=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}); if(res.ok)setSent(true);}
  if(sent)return <div className="border-l-2 border-bronze py-4 pl-5" role="status"><h3 className="display text-3xl">Thank you.</h3><p className="mt-2">Your enquiry has been received. We will respond using your preferred contact method.</p></div>;
  return <form onSubmit={submit} className="grid gap-5">
    <label className="text-sm">Full name<input required name="name" className="mt-2 w-full border border-ink/25 bg-transparent p-3"/></label>
    <div className="grid gap-5 md:grid-cols-2"><label className="text-sm">Phone<input required name="phone" className="mt-2 w-full border border-ink/25 bg-transparent p-3"/></label><label className="text-sm">Email<input type="email" name="email" className="mt-2 w-full border border-ink/25 bg-transparent p-3"/></label></div>
    <label className="text-sm">Service<select name="service" className="mt-2 w-full border border-ink/25 bg-transparent p-3"><option>Funeral services & caskets</option><option>Vaults & mausoleums</option><option>1Click Events</option><option>Foto1Click</option></select></label>
    <label className="text-sm">How can we help?<textarea required name="message" rows={5} className="mt-2 w-full border border-ink/25 bg-transparent p-3"/></label>
    <label className="text-sm">Preferred contact<select name="preferredContact" className="mt-2 w-full border border-ink/25 bg-transparent p-3"><option>Phone</option><option>WhatsApp</option><option>Email</option></select></label>
    <button className="bg-ink px-6 py-4 text-white">Send enquiry</button>
  </form>;
}
