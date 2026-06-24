"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Package, Stethoscope, ClipboardCheck, GraduationCap, Handshake } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const services = [
  { key: "pharmaceutical", icon: Package },
  { key: "medicalDevices", icon: Stethoscope },
  { key: "regulatory", icon: ClipboardCheck },
  { key: "education", icon: GraduationCap },
  { key: "partnerships", icon: Handshake },
];

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("services.label")}
            title={t("services.title")}
            description={t("services.description")}
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.key} direction="up" delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {t(`service.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`service.${service.key}.description`)}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
