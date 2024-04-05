import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../../lib/registry";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utkarsh Dwivedi | Portfolio",
  description: "Utkarsh Dwivedi's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
