import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import ApolloClientProvider from "@/lib/apollo/provider";
import "../globals.css";

import { setRequestLocale } from "next-intl/server";
import enMessages from "../../../messages/en.json";
import mnMessages from "../../../messages/mn.json";
import jaMessages from "../../../messages/ja.json";

const messagesByLocale: Record<string, typeof enMessages> = {
  en: enMessages,
  mn: mnMessages,
  ja: jaMessages,
};

function getMessages(locale: string) {
  return messagesByLocale[locale] ?? enMessages;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://marmansu-llc.github.io"),
  title: "MARMANSU LLC — More Than Products",
  description:
    "MARMANSU LLC connects Japanese healthcare quality with Mongolia through products, education, medical networks, and long-term partnerships.",
  openGraph: {
    title: "MARMANSU LLC — More Than Products",
    description:
      "Connecting Japanese healthcare quality with Mongolia through trust, knowledge, and long-term partnerships.",
    type: "website",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "mn" }, { locale: "ja" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
