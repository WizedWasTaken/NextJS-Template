// Imports
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Components
import Sidebar from "@/components/ui/sidebar/sidebar";

// Fonts
import { lusitana } from "@/ui/fonts";

// Metadata properties
export const metadata: Metadata = {
  title: "Websidey App",
  description: "Website lavet af Websidey",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased flex `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar isShown={true} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
