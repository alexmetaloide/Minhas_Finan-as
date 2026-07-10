import type { Metadata } from "next";
import "./globals.css";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "Minhas Finanças", description: "Controle local de produção, lucro e retiradas para marcenaria.", manifest: "/manifest.webmanifest", icons: { icon: "/icone.svg" }, openGraph: { title: "Minhas Finanças", description: "Controle local para sua produção.", images: ["/og.png"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
