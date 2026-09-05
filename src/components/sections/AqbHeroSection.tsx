import Image from "@/components/common/Image";

const concepts = [
  "ONE-PIECE DESIGN",
  "RE-CRYSTALLIZED HA SURFACE",
  "EXISTING BONE PRESERVATION",
];

export function AqbHeroSection() {
  return (
    <section className="w-full bg-background" aria-labelledby="aqb-title">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-4 py-20 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24 xl:px-12">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#66836d]">
            JAPANESE IMPLANT TECHNOLOGY
          </p>
          <h1
            id="aqb-title"
            className="max-w-lg text-5xl font-semibold leading-[1.06] tracking-[-0.03em] text-navy md:text-6xl"
          >
            AQB Implant System
          </h1>
          <p className="mt-7 text-2xl font-medium tracking-[-0.02em] text-navy md:text-3xl">
            Simple is Best.
          </p>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
            Developed in Japan, AQB is a one-piece implant system built around
            a simple clinical philosophy — respecting existing bone and
            supporting a biologically focused approach to implant treatment.
          </p>

          <ul className="mt-12 border-t border-border">
            {concepts.map((concept) => (
              <li
                key={concept}
                className="border-b border-border py-4 text-xs font-semibold tracking-[0.14em] text-navy"
              >
                <span className="mr-3 text-[#66836d]">/</span>
                {concept}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[600px]">
          <Image
            src="/images/aqb-product01.webp"
            alt="AQB one-piece dental implant system"
            width={700}
            height={700}
            priority
            className="h-auto max-h-[600px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
