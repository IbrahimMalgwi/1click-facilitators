import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileBar } from "@/components/MobileBar";
const serif=Cormorant_Garamond({subsets:["latin"],variable:"--font-cormorant",weight:["500","600"]});
const sans=Manrope({subsets:["latin"],variable:"--font-manrope"});
export const metadata:Metadata={title:{default:"1Click Facilitators | Lagos",template:"%s | 1Click Facilitators"},description:"Funeral facilitation, vault and mausoleum services, events, photography and videography in Lagos, Nigeria."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${serif.variable} ${sans.variable} grain`}><SiteHeader/><main>{children}</main><SiteFooter/><MobileBar/></body></html>}
