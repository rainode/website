import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/ui/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = await getTranslations("header");
  const footer = await getTranslations("footer");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="bg-aurora absolute inset-0 opacity-70" />
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.75_0.16_190_/_0.35),transparent_65%)] blur-[120px]" />
                <div className="absolute bottom-[-120px] right-[-60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,oklch(0.77_0.17_145_/_0.35),transparent_70%)] blur-[120px]" />
              </div>
              <SiteHeader
                labels={{
                  brandName: t("brandName"),
                  brandTagline: t("brandTagline"),
                  cta: t("cta"),
                }}
              />
              {children}
              <SiteFooter
                labels={{
                  rights: footer("rights"),
                  terms: footer("terms"),
                  privacy: footer("privacy"),
                  status: footer("status"),
                }}
              />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
