import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Competec",
  description: "Somos Competec, empresa especializada en consultoría y asesoramiento en Tecnologías Cloud.",
  keywords: ["TI", "Cloud", "Desarrollo Web", "Capacitacion"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} dark:bg-[#1f1f22] bg-white`}>
        {children}
      </body>
    </html>
  );
}
