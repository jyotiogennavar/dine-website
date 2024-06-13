
import { League_Spartan } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import Footer from "@/components/Footer";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Dine Website Challenge",
  description: "Frontend Mentor | Dine Website Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={LeagueSpartan.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
