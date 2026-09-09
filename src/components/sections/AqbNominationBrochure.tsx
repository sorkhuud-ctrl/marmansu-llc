import Image from "@/components/common/Image";
import { Link } from "@/i18n/routing";

const facts = [
  ["~35 μm", "Re-crystallized HA layer"],
  ["High Crystallinity", "Өндөр талстжилт"],
  ["Ca/P 1.66", "Кальци/фосфорын харьцаа"],
  ["JP Patent No. 3198125", "Японы патент"],
] as const;

const comparisonRows = [
  ["БҮТЭЦ", "Тусдаа эд анги (implant + abutment + screw)", "Нэг бүхэл бүтэц (implant + abutment integrated)"],
  ["НАЙДВАРТАЙ БАЙДАЛ", "Холболтын хэсэгт нян хуримтлагдах эрсдэлтэй", "Холболтын хэсэг байхгүй, нян хуримтлагдах эрсдэл бага"],
  ["ЭМЧИЛГЭЭНИЙ ЯВЦ", "Хэд хэдэн мэс ажилбар шаардлагатай", "Ихэвчлэн 1 үе шаттай (1-stage)"],
  ["ЯСНЫ ХАМГААЛАЛТ", "Ясны алдагдал үүсэх эрсдэлтэй", "HA гадаргуу нь ясыг өөртөө татан ургуулж, импланттай улам бэхжинэ."],
] as const;

const timeline = [
  ["1985", "DEVELOPMENT", "HA суурьтай One-Piece имплантын хөгжүүлэлт эхэлсэн"],
  ["1988", "CLINICAL TRIAL", "Mitsui Memorial Hospital-ийн Шүд, амны хөндийн мэс заслын тасагт клиникийн туршилт эхэлсэн"],
  ["1992", "REGULATORY APPLICATION", "Японы Эрүүл мэндийн яаманд зөвшөөрөл авах хүсэлт гаргасан"],
  ["1994", "APPROVAL & CLINICAL USE", "Үйлдвэрлэх, худалдаалах зөвшөөрөл авч, AQB-ийн сургалтын хөтөлбөр эхэлсэн"],
  ["2026", "30+ YEARS IN JAPAN", "Японы клиникийн практикт 30 гаруй жил хэрэглэгдэж байна"],
] as const;

function PageLabel({ number, question }: { number: string; question: string }) {
  return <div className="nomination-label"><span>AQB IMPLANT SYSTEM / 2026</span><span>{number} — {question}</span></div>;
}

function ScientificFigure({ src, alt, label }: { src: string; alt: string; label: string }) {
  return <figure className="scientific-figure"><Image src={src} alt={alt} width={444} height={293} className="h-auto w-full object-contain" /><figcaption>{label}</figcaption></figure>;
}

export function AqbNominationBrochure() {
  return (
    <main className="aqb-nomination">
      <section className="nomination-page nomination-cover">
        <PageLabel number="01" question="WHAT IS AQB?" />
        <div className="cover-content">
          <p className="nomination-eyebrow">MONGOLIA HEALTH TECHNOLOGY EXPO 2026</p>
          <h1>AQB<br />IMPLANT<br />SYSTEM</h1>
          <p className="cover-technology">Японд хөгжүүлсэн Re-crystallized HA + One-Piece технологи</p>
          <p className="nomination-copy">Японд 30 гаруй жилийн клиникийн хэрэглээгээр батлагдсан технологи — Монголд.</p>
        </div>
        <Image src="/images/aqb-nomination/one-piece-implant.webp" alt="AQB Implant System" width={800} height={1400} priority className="cover-implant" />
        <footer className="cover-footer"><span>“ШИЛДЭГ ИННОВАЦИ” НОМИНАЦИ</span><div><strong>MARMANSU LLC</strong><span>AQB Implant System-ийн Монгол дахь албан ёсны дистрибьютор</span></div></footer>
      </section>

      <section className="nomination-page">
        <PageLabel number="02" question="WHY IS RE-CRYSTALLIZED HA DIFFERENT?" />
        <header className="nomination-heading"><p className="nomination-eyebrow">BIOLOGICAL / SURFACE INNOVATION</p><h2>Ердийн HA-аас<br />Re-crystallized HA хүртэл</h2><p>AQB-ийн гол ялгаа нь зөвхөн HA бүрхүүлтэйд бус — Re-crystallized HA гадаргуугийн технологид оршино.</p></header>
        <div className="surface-path">{["Titanium", "β-TCP Plasma Spray", "Hydrothermal Treatment", "Re-crystallized HA Surface"].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div>
        <p className="surface-logic"><span>CONVENTIONAL HA</span><b>→</b><span>AQB RE-CRYSTALLIZED HA</span><b>→</b><span>ЯСТАЙ БИОЛОГИЙН ХАРИЛЦАН ҮЙЛЧЛЭЛ</span></p>
        <div className="sem-comparison">
          <ScientificFigure src="/images/aqb-nomination/conventional-sem.webp" alt="Conventional HA surface SEM image" label="CONVENTIONAL HA / SEM" />
          <ScientificFigure src="/images/aqb-nomination/aqb-sem.webp" alt="AQB Re-crystallized HA surface SEM image" label="AQB RE-CRYSTALLIZED HA / SEM" />
        </div>
        <div className="science-support">
          <ScientificFigure src="/images/aqb-nomination/conventional-xrd.webp" alt="Conventional HA XRD composition chart" label="Conventional HA / XRD" />
          <ScientificFigure src="/images/aqb-nomination/conventional-interface.webp" alt="Conventional HA interface diagram" label="Conventional HA / interface" />
          <ScientificFigure src="/images/aqb-nomination/aqb-xrd.webp" alt="AQB Re-crystallized HA XRD composition chart" label="AQB Re-crystallized HA / XRD" />
          <ScientificFigure src="/images/aqb-nomination/aqb-interface.webp" alt="AQB Re-crystallized HA interface diagram" label="AQB Re-crystallized HA / interface" />
        </div>
        <blockquote>“HA гадаргуу” нь ясыг өөртөө татан ургуулж, импланттай нягт бэхжинэ.</blockquote>
        <dl className="technical-facts">{facts.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
      </section>

      <section className="nomination-page">
        <PageLabel number="03" question="WHY IS AQB STRUCTURALLY DIFFERENT?" />
        <header className="nomination-heading"><p className="nomination-eyebrow">STRUCTURAL / MECHANICAL INNOVATION</p><h2>Энгийн бүтэц.<br />Тодорхой ялгаа.</h2></header>
        <aside className="mechanical-load">
          <strong>~250 kgf</strong>
          <div><span>Зажлах үед үүсэж болох механик ачаалал</span><p>Давтамжтай механик ачаалалд имплантын бүтцийн дизайн чухал.</p></div>
          <em>Давтамжтай механик ачаалал → бүтцийн дизайн чухал</em>
        </aside>
        <div className="structural-visuals">
          <figure><Image src="/images/aqb-nomination/two-piece-schematic.webp" alt="Conventional titanium two-piece implant components" width={440} height={340} className="h-64 w-auto object-contain" /><figcaption>CONVENTIONAL<br /><strong>Titanium 2-Piece Implant</strong></figcaption></figure>
          <span>VS</span>
          <figure><Image src="/images/aqb-nomination/cover-implant.png" alt="AQB One-Piece implant" width={170} height={350} className="h-64 w-auto object-contain" /><figcaption>AQB<br /><strong>One-Piece Implant</strong></figcaption></figure>
        </div>
        <div className="structure-comparison">{comparisonRows.map(([label, conventional, aqb]) => <div key={label}><h3>{label}</h3><p>{conventional}</p><p>{aqb}</p></div>)}</div>
        <footer className="structure-closing"><strong>Re-crystallized HA + One-Piece</strong><span>Гадаргуугийн технологи болон бүтцийн концепцыг нэг системд хослуулсан нь AQB Implant System-ийн үндсэн онцлог юм.</span><em>Simple is Best.</em></footer>
      </section>

      <section className="nomination-page">
        <PageLabel number="04" question="WHY CAN WE TRUST THE TECHNOLOGY?" />
        <header className="nomination-heading"><p className="nomination-eyebrow">JAPANESE CLINICAL HERITAGE</p><h2>Итгэл нь<br />цаг хугацаанд бий болдог.</h2><p>Хөгжүүлэлтээс клиникийн хэрэглээ хүртэл — Японд бий болсон 30+ жилийн AQB технологи.</p></header>
        <ol className="credibility-timeline">{timeline.map(([year, title, description]) => <li key={year}><span>{year}</span><div><strong>{title}</strong><p>{description}</p></div></li>)}</ol>
        <p className="timeline-conclusion">DEVELOPMENT → CLINICAL TRIAL → REGULATORY PROCESS → APPROVAL &amp; CLINICAL USE → 30+ YEARS</p>
      </section>

      <section className="nomination-page">
        <PageLabel number="05" question="HAS IT LASTED CLINICALLY?" />
        <header className="nomination-heading"><p className="nomination-eyebrow">LONG-TERM CLINICAL EVIDENCE</p><h2>30+ жилийн клиникийн хэрэглээ ба урт хугацааны туршлага</h2><p>AQB Implant System нь 1994 оноос Японы клиникийн практикт хэрэглэгдэж ирсэн бөгөөд сургалтын материалд 10–20 гаруй жилийн хяналттай урт хугацааны клиникийн кейсүүд танилцуулагдсан байдаг.</p></header>
        <div className="clinical-dates"><strong>2001 / 07 / 11</strong><span>20 жил 11 сар</span><strong>2022 / 06 / 01</strong></div>
        <div className="clinical-images">
          <ScientificFigure src="/images/aqb-nomination/clinical-2001.jpg" alt="Original 2001 clinical X-ray" label="2001 / 07 / 11" />
          <ScientificFigure src="/images/aqb-nomination/clinical-2022.jpg" alt="Original 2022 clinical follow-up X-ray" label="2022 / 06 / 01" />
        </div>
        <p className="clinical-caption">Дээд зүүн төвийн 22-р шүдэнд суулгасан AQB имплант — 20 жил 11 сарын дараах хяналтын үзлэг</p>
        <footer className="clinical-closing">30+ жилийн хэрэглээ — AQB-ийн технологийн хөгжлийн үргэлжилсэн клиникийн туршлага.</footer>
      </section>

      <section className="nomination-page bg-[#f3f8f9]">
        <div className="my-auto border-y border-[#b7c8d3] py-10">
          <p className="nomination-eyebrow">AQB INNOVATION</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#102e4b] md:text-5xl">AQB — Монголын шүдний эмчилгээнд шинэ боломж</h2>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-[#164e76]">Re-crystallized HA, One-Piece бүтэц, 30+ жилийн Японы клиникийн туршлага.</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#50697d]">AQB технологийн инноваци, клиникийн нотолгоо болон Монголд бий болгох үнэ цэнийг дэлгэрэнгүй танилцана уу.</p>
          <Link href="/aqb/innovation" className="mt-8 inline-flex border border-[#102e4b] px-6 py-3 text-sm font-semibold tracking-[0.1em] text-[#102e4b] transition-colors hover:bg-[#102e4b] hover:text-white">AQB INNOVATION →</Link>
        </div>
      </section>

      <section className="nomination-page mongolia-page">
        <PageLabel number="06" question="WHY DOES AQB MATTER FOR MONGOLIA?" />
        <header className="nomination-heading"><p className="nomination-eyebrow">AQB IN MONGOLIA</p><h2>Технологи.<br />Мэдлэг.<br />Клиникийн туршлага.</h2></header>
        <div className="mongolia-pillars">
          <article><span>01</span><h3>ТЕХНОЛОГИ</h3><p>Re-crystallized HA гадаргуугийн технологи + One-Piece бүтэц</p></article>
          <article><span>02</span><h3>СУРГАЛТ</h3><p>Японы AQB мэргэжилтнүүдийн клиникийн мэдлэг, сургалтын тогтолцоог Монголын шүдний эмч нарт үе шаттайгаар нэвтрүүлэх</p></article>
          <article><span>03</span><h3>МОНГОЛ ДАХЬ НЭВТРҮҮЛЭЛТ</h3><p>MARMANSU LLC нь AQB Implant System-ийн Монгол дахь албан ёсны дистрибьюторын хувьд бүтээгдэхүүний нийлүүлэлт, мэргэжлийн сургалт, клиникийн мэдлэгийг уялдуулсан тогтвортой нэвтрүүлэлтийг хөгжүүлж байна.</p></article>
        </div>
        <blockquote>Японд 30 гаруй жил клиникт хэрэглэгдсэн AQB технологийг бүтээгдэхүүн төдийгүй мэргэжлийн мэдлэг, сургалтын тогтолцооны хамт Монголд нэвтрүүлж байна.</blockquote>
        <footer className="mongolia-footer"><strong>MARMANSU LLC</strong><span>AQB Implant System-ийн Монгол дахь албан ёсны дистрибьютор</span></footer>
      </section>
    </main>
  );
}
