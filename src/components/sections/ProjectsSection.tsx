"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  { key: "academic" },
  { key: "dental" },
  { key: "productIntro" },
  { key: "hospital" },
];

export function ProjectsSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <FadeIn direction="up">
          <SectionHeading
            label={t("projects.label")}
            title={t("projects.title")}
            description={t("projects.description")}
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <FadeIn key={project.key} direction="up" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex bg-white rounded-md overflow-hidden shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-32 md:w-44 bg-muted flex-shrink-0" />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {t(`project.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`project.${project.key}.description`)}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
