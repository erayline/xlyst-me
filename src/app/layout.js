import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🍸  Prestige List",
  description: "Link list tool for prestiged people.",
  icons:{
    icon:"/icon.png"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      
      </body>
    </html>
  );
}
