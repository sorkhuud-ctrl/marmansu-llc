import { Link } from "@/i18n/routing";

export function AqbInnovationCta() {
  return (
    <section className="w-full border-t border-border bg-[#f3f8f9]">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:px-12">
        <div className="border-y border-[#b7c8d3] py-10">
          <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            AQB INNOVATION
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy md:text-5xl">
            AQB — Монголын шүдний эмчилгээнд шинэ боломж
          </h2>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-[#164e76]">
            Re-crystallized HA, One-Piece бүтэц, 30+ жилийн Японы клиникийн туршлага.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            AQB технологийн инноваци, клиникийн нотолгоо болон Монголд бий болгох үнэ цэнийг дэлгэрэнгүй танилцана уу.
          </p>
          <Link
            href="/aqb/innovation"
            className="mt-8 inline-flex border border-navy px-6 py-3 text-sm font-semibold tracking-[0.1em] text-navy transition-colors hover:bg-navy hover:text-white"
          >
            AQB INNOVATION →
          </Link>
        </div>
      </div>
    </section>
  );
}
