import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Competec",
    template: "%s - Competec"
  },
  description: "Somos Competec, empresa especializada en consultoría y asesoramiento en Tecnologías Cloud.",
  keywords: ["TI", "Cloud", "Desarrollo Web", "Capacitacion"],
  openGraph: {
    type: "website",
    locale: "es_Es",
    url: "competec.com.pe",
    siteName: "Competec",
    title: "Competec",
    description: "Somos Competec, empresa especializada en consultoría y asesoramiento en Tecnologías Cloud.",
    images: [
      {
        url: "https://www.competec.com.pe/Logo2.png",
        width: 800,
        height: 600,
        alt: "Logo de Competec"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${poppins.className} dark:bg-[#1f1f22] bg-white`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-TEPWCBTYTQ" />
    </html>
  );
}
