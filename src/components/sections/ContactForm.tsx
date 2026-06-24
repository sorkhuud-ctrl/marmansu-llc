"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-secondary rounded-lg p-8">
        <p className="text-navy font-medium mb-2">Thank you for contacting MARMANSU.</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We appreciate your interest and will review your inquiry carefully. Our team will get back to you as soon as possible.
        </p>
        <p className="text-muted-foreground text-sm mt-4">Alternatively, you may contact us directly by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-muted-foreground mb-6">{t("description")}</p>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t("fullName")} *
          </label>
          <input
            type="text"
            required
            className="w-full h-12 px-4 rounded border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{t("company")}</label>
          <input
            type="text"
            className="w-full h-12 px-4 rounded border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t("email")} *
          </label>
          <input
            type="email"
            required
            className="w-full h-12 px-4 rounded border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{t("phone")}</label>
          <input
            type="tel"
            className="w-full h-12 px-4 rounded border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          {t("message")} *
        </label>
        <textarea
          required
          rows={6}
          className="w-full px-4 py-3 rounded border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-navy px-8 py-3.5 text-sm font-medium text-white hover:bg-navy-light transition-colors"
      >
        {t("submit")}
      </button>
    </form>
  );
}
