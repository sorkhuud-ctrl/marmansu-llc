import Image from "@/components/common/Image";

const facts = [
  ["~35 μm", "Re-crystallized HA layer"],
  ["High Crystallinity", "Өндөр талстжилт"],
  ["Ca/P 1.66", "Кальци/фосфорын харьцаа"],
  ["JP Patent No. 3198125", "Японы патент"],
] as const;

const historyPhases = [
  {
    number: "01",
    title: "DEVELOPMENT & VALIDATION",
    range: "1985–1994",
    milestones: [
      ["1985", "DEVELOPMENT", "AQB имплантын хөгжүүлэлтийн концепц, дизайны ажил эхэлсэн. Хөгжүүлэлтэд Токио Анагаах ухаан, шүдний их сургуулийн эмнэлгийн материалын судалгааны хүрээлэн, Advance-ийн судалгааны баг, Mitsui Memorial Hospital-ийн Шүд, амны хөндийн мэс заслын баг оролцсон."],
      ["1988–1990", "FIRST CLINICAL TRIAL", "Mitsui Memorial Hospital-ийн Шүд, амны хөндийн мэс заслын тасагт анхны клиникийн туршилт явагдсан."],
      ["1990–1991", "SECOND CLINICAL TRIAL", "Mitsui Memorial Hospital болон Nippon Dental University-ийн Амны хөндийн мэс заслын II тэнхим хамтран хоёр дахь клиникийн туршилтыг хийсэн."],
      ["1992", "REGULATORY APPLICATION", "Японы Эрүүл мэндийн яаманд үйлдвэрлэл, хэрэглээний зөвшөөрөл авах хүсэлт гаргасан."],
      ["1994", "APPROVAL & MARKET INTRODUCTION", "6-р сард зөвшөөрөл авч үйлдвэрлэл, худалдаа эхэлсэн. 8-р сараас AQB Implant-ийн мэргэжлийн сургалтын хөтөлбөр эхэлсэн."],
    ],
  },
  {
    number: "02",
    title: "CLINICAL & PROFESSIONAL EVOLUTION",
    range: "1998–2011",
    milestones: [
      ["1998", "PROFESSIONAL RESEARCH COMMUNITY", "IAI судалгааны нийгэмлэг байгуулагдсан."],
      ["2002", "PRODUCT EVOLUTION", "2-Piece option худалдаанд гарсан."],
      ["2007", "ONE-PIECE T-TYPE", "One-Piece T-type загвар худалдаанд гарсан."],
      ["2008", "ACADEMIC DEVELOPMENT", "IAI нь 日本先進インプラント医療学会 (AIM) буюу Japanese Society for Advanced Implant Medicine болон өргөжсөн."],
      ["2011", "INCORPORATION", "Тус мэргэжлийн нийгэмлэг ерөнхий incorporated association хэлбэрт шилжсэн."],
    ],
  },
] as const;

const comparison = [
  ["БҮТЭЦ", "Тусдаа эд анги (implant + abutment + screw)", "Нэг бүхэл бүтэц (implant + abutment integrated)"],
  ["НАЙДВАРТАЙ БАЙДАЛ", "Холболтын хэсэгт нян хуримтлагдах эрсдэлтэй", "Холболтын хэсэг байхгүй, нян хуримтлагдах эрсдэл бага"],
  ["ЭМЧИЛГЭЭНИЙ ЯВЦ", "Хэд хэдэн ажилбар шаардлагатай", "Ихэвчлэн 1 үе шаттай (1-stage)"],
  ["ЯСНЫ ХАМГААЛАЛТ", "Ясны алдагдал үүсэх эрсдэлтэй", "HA гадаргуу нь ясыг өөртөө татан ургуулж, импланттай нягт бэхжинэ."],
] as const;

function RunningHead() {
  return <div className="redesign-running-head"><span>AQB / MONGOLIA HEALTH TECHNOLOGY EXPO 2026</span></div>;
}

function PageNumber({ value }: { value: string }) {
  return <span className="redesign-page-number" aria-label={`Page ${value}`}>{value}</span>;
}

function Evidence({ src, alt, label }: { src: string; alt: string; label: string }) {
  return <figure className="redesign-evidence"><Image src={src} alt={alt} width={444} height={293} className="h-auto w-full object-contain" /><figcaption>{label}</figcaption></figure>;
}

export function AqbNominationRedesign() {
  return (
    <main className="aqb-redesign">
      <section className="redesign-page redesign-cover">
        <RunningHead />
        <div className="redesign-cover-title">
          <p>“ШИЛДЭГ ИННОВАЦИ” НОМИНАЦИ</p>
          <h1>AQB<br />IMPLANT<br />SYSTEM</h1>
          <strong>Японд хөгжүүлсэн Re-crystallized HA + One-Piece технологи</strong>
          <span>Японд 30 гаруй жилийн клиникийн хэрэглээгээр батлагдсан технологи — Монголд.</span>
        </div>
        <Image src="/images/aqb-nomination/cover-multiple-implants.webp" alt="AQB Implant System product configurations" width={700} height={520} priority className="redesign-cover-product" />
        <footer><div><b>MARMANSU LLC</b><span>AQB Implant System-ийн Монгол дахь албан ёсны дистрибьютор</span></div></footer>
        <PageNumber value="01" />
      </section>

      <section className="redesign-page redesign-surface-page">
        <RunningHead />
        <header className="redesign-surface-heading"><p>01 / SURFACE TECHNOLOGY</p><h2>Re-crystallized HA</h2><strong>Ясны эдтэй байгалийн жамаар нэгддэг гадаргуу.</strong><span>AQB-ийн гол ялгаа нь зөвхөн HA бүрхүүлтэйд бус — Re-crystallized HA гадаргуугийн технологид оршино.</span></header>
        <div className="redesign-surface-columns">
          <article className="redesign-surface-column">
            <header><h3>Ердийн HA бүрхүүл</h3><p>Conventional HA coating</p></header>
            <Evidence src="/images/aqb-nomination/conventional-sem.webp" alt="Conventional HA surface SEM" label="FIG. 01 / CONVENTIONAL HA / SEM" />
            <div className="redesign-surface-support">
              <Evidence src="/images/aqb-nomination/conventional-xrd.webp" alt="Conventional HA XRD material composition" label="FIG. 02 / CONVENTIONAL HA / XRD" />
              <Evidence src="/images/aqb-nomination/conventional-interface.webp" alt="Conventional HA bone interface diagram" label="FIG. 03 / CONVENTIONAL HA / BONE INTERFACE" />
            </div>
          </article>
          <article className="redesign-surface-column redesign-surface-column-aqb">
            <header><h3>AQB Дахин талстжуулсан HA</h3><p>Re-crystallized HA (AQB)</p></header>
            <Evidence src="/images/aqb-nomination/aqb-sem-replacement.webp" alt="AQB Re-crystallized HA surface SEM" label="AQB RE-CRYSTALLIZED HA / SEM" />
            <div className="redesign-surface-support">
              <Evidence src="/images/aqb-nomination/aqb-xrd.webp" alt="AQB Re-crystallized HA XRD material composition" label="FIG. 04 / AQB RE-CRYSTALLIZED HA / XRD" />
              <Evidence src="/images/aqb-nomination/aqb-interface.webp" alt="AQB Re-crystallized HA bone interface diagram" label="FIG. 05 / AQB RE-CRYSTALLIZED HA / BONE INTERFACE" />
            </div>
          </article>
        </div>
        <div className="redesign-surface-summary">
          <article><h3>Ердийн HA бүрхүүл</h3><p>SEM, XRD болон яс-имплантын интерфейсийн дүрслэлээр харьцуулсан суурь бүлэг.</p></article>
          <article><h3>AQB Дахин талстжуулсан HA</h3><p>SEM, XRD болон яс-имплантын интерфейсийн дүрслэлээр харьцуулсан AQB бүлэг.</p><dl>{facts.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}</dl></article>
        </div>
        <p className="redesign-source">Source: AQB Implant System technical and clinical training materials</p>
        <PageNumber value="02" />
      </section>

      <section className="redesign-page redesign-biological-page">
        <RunningHead />
        <header className="redesign-heading"><p>02 / BIOLOGICAL INTEGRATION</p><h2>Имплантын гадаргуугаас<br />ясны харилцан үйлчлэл рүү.</h2><span>AQB Re-crystallized HA гадаргуу нь яс үүсэх процессыг дэмжиж, яс имплантын гадаргуутай шууд холбогдон бэхжих нөхцөлийг бүрдүүлдэг.</span></header>
        <p className="redesign-bio-direction"><b>AQB RE-CRYSTALLIZED HA</b><i>→</i><b>БИОЛОГИЙН ХАРИЛЦАН ҮЙЛЧЛЭЛ</b></p>
        <div className="redesign-bio-primary"><Evidence src="/images/aqb-nomination/biological-bone-response.png" alt="AQB biological bone response diagram" label="FIG. 04 / BONE RESPONSE AND NEW BONE FORMATION" /><blockquote>“HA гадаргуу” нь ясыг өөртөө татан ургуулж, импланттай нягт бэхжинэ.</blockquote></div>
        <section className="redesign-technical-evidence" aria-labelledby="technical-evidence-heading">
          <header><p>03 / TECHNOLOGY, MANUFACTURING &amp; QUALITY</p><h3 id="technical-evidence-heading">Боловсруулалтаас чанарын хяналт хүртэл.</h3><span>AQB нь титаны гадаргууг ердийн HA давхаргаар бүрэхээс илүүтэйгээр тусгай боловсруулалтын процессоор дахин талстжуулсан гидроксиапатитын гадаргуу — Re-crystallized HA үүсгэдэг технологийг хөгжүүлсэн.</span></header>
          <div className="redesign-technical-grid">
            <Evidence src="/images/aqb-nomination/production-process.webp" alt="AQB implant production process" label="FIG. 05 / PRODUCTION PROCESS" />
            <Evidence src="/images/aqb-nomination/surface-processing.webp" alt="AQB implant surface processing" label="FIG. 06 / SURFACE PROCESSING" />
            <Evidence src="/images/aqb-nomination/production-facility.webp" alt="AQB production facility" label="FIG. 07 / PRODUCTION FACILITY" />
            <Evidence src="/images/aqb-nomination/iso-13485.webp" alt="ISO 13485 quality management mark" label="FIG. 08 / ISO 13485" />
          </div>
          <p className="redesign-technical-note">AQB Implant-ийн үйлдвэрлэл нь эмнэлгийн хэрэгслийн чанарын удирдлагын олон улсын ISO 13485:2016 стандартын шаардлагыг хангасан тогтолцооны дагуу явагдаж, бүтээгдэхүүний чанарыг үйлдвэрлэлийн бүх үе шатанд хянадаг.</p>
        </section>
        <p className="redesign-source redesign-source-left">Source: AQB Implant System technical and clinical training materials</p>
        <PageNumber value="03" />
      </section>

      <section className="redesign-page redesign-mechanical-page">
        <RunningHead />
        <header className="redesign-heading redesign-split-heading"><p>04 / MECHANICAL SIMPLICITY</p><h2>Хазалтын ачаалал<br />даах бүтэц.</h2><div><strong>~250 kgf</strong><span>Зажлах үед үүсэж болох механик ачаалал</span><em>AQB-ийн клиник сургалтад ашигладаг ойролцоох механик ачааллын лавлагаа.</em></div></header>
        <p className="redesign-load-line">REPEATED MECHANICAL LOAD <b>↓</b> STRUCTURAL DESIGN MATTERS</p>
        <div className="redesign-structure-visual">
          <figure><Evidence src="/images/aqb-nomination/two-piece-schematic.webp" alt="Conventional Titanium 2-Piece implant schematic" label="CONVENTIONAL TITANIUM 2-PIECE" /><p>implant + abutment + screw</p></figure>
          <strong>VS</strong>
          <figure><Evidence src="/images/aqb-nomination/cover-implant.png" alt="AQB One-Piece implant" label="AQB ONE-PIECE" /><p>implant + abutment integrated</p></figure>
        </div>
        <div className="redesign-comparison">{comparison.map(([label, conventional, aqb]) => <div key={label}><b>{label}</b><span>{conventional}</span><strong>{aqb}</strong></div>)}</div>
        <section className="redesign-practical-benefit"><Image src="/images/aqb-nomination/one-stage-clinical-diagram.jpg" alt="AQB One-Piece one-stage clinical diagram" width={290} height={290} className="redesign-one-stage-diagram" /><div><header><span>05 / 1-STAGE</span><h3>1 үе шаттай энгийн ажилбар.</h3></header><p>AQB-ийн One-Piece бүтэц нь имплант болон тулгуур хэсгийг нэг бүхэл болгосноор тусдаа эд анги, холболтын нэмэлт шат дамжлагыг багасгадаг. Ингэснээр имплантыг нэг үе шаттайгаар суулгах боломжтой бөгөөд эмчилгээний явцыг илүү энгийн, цэгцтэй болгодог.</p></div></section>
        <footer className="redesign-one-piece-footer"><strong>One-Piece + Re-crystallized HA</strong><p>Энгийн ажиллагаа, бат бөх интеграци, байгалийн шүдэнд ойр тогтвортой байдлыг зорьсон шийдэл.</p></footer>
        <PageNumber value="04" />
      </section>

      <section className="redesign-page redesign-follow-up-page">
        <RunningHead />
        <header className="redesign-heading"><p>06 / LONG-TERM FOLLOW-UP</p><h2>Урт хугацааны клиникийн туршлага, нотолгоо.</h2><span>AQB Implant System нь 1994 оноос Японы клиникийн практикт хэрэглэгдэж ирсэн бөгөөд 10–20 гаруй жилийн урт хугацааны хяналттай клиникийн кейсүүд AQB-ийн сургалтын материалд өнөөдрийг хүртэл танилцуулагдсаар байна.</span></header>
        <section className="redesign-clinical-case redesign-clinical-case-primary" aria-labelledby="case-one-heading">
          <header><b>CASE 01</b><h3 id="case-one-heading">20 жил 11 сарын тогтвортой бэхжилт, ясны нөхөн төлжилт</h3></header>
          <p className="redesign-case-metadata">Суулгах үед 53 настай эрэгтэй → 74 нас | 20 жил 11 сарын хяналт</p>
          <div className="redesign-xrays"><Evidence src="/images/aqb-nomination/clinical-2001.jpg" alt="2001 AQB implant X-ray" label="2001 / 07 / 11" /><Evidence src="/images/aqb-nomination/clinical-2022.jpg" alt="2022 AQB implant follow-up X-ray" label="2022 / 06 / 01" /></div>
          <p>Дээд зүүн төвийн 22-р шүдэнд суулгасан AQB имплант — 20 жил 11 сарын дараах хяналтын үзлэгээр имплантын орчмын ясны түвшин тогтвортой хадгалагдаж буй урт хугацааны клиникийн кейс.</p>
        </section>
        <section className="redesign-clinical-case redesign-clinical-case-secondary" aria-labelledby="case-two-heading">
          <header><b>CASE 02</b><h3 id="case-two-heading">Нэмэлт яс нөхөх материалгүй дээд эрүүний хөндий өргөх ажилбар</h3></header>
          <p className="redesign-case-metadata">Суулгах үед 41 настай эмэгтэй | 8 жил 9 сарын хяналт</p>
          <div className="redesign-case-sequence">
            <Evidence src="/images/aqb-nomination/clinical-case-02-before.png" alt="X-ray before AQB implant placement" label="ИМПЛАНТ СУУЛГАХЫН ӨМНӨ" />
            <i aria-hidden="true">→</i>
            <Evidence src="/images/aqb-nomination/clinical-case-02-placement.png" alt="X-ray after AQB implant placement" label="AQB ИМПЛАНТ СУУЛГАСНЫ ДАРАА" />
            <i aria-hidden="true">→</i>
            <Evidence src="/images/aqb-nomination/clinical-case-02-follow-up.png" alt="X-ray eight years and nine months after AQB implant placement" label="8 ЖИЛ 9 САРЫН ДАРАА" />
          </div>
          <p>Ясны өндөр хүрэлцээгүй дээд эрүүний хэсэгт нэмэлт өөрийн яс болон хиймэл яс нөхөх материал ашиглалгүйгээр AQB имплант суулгасан. 8 жил 9 сарын дараах хяналтаар имплантын орчмын яс тогтвортой хадгалагдаж, дээд эрүүний хөндийн ёроолд яс бүрэлдэн тогтсон байдал ажиглагдана.</p>
          <p className="redesign-case-takeaway">Нэмэлт яс нөхөх материалгүй. Яс үүсэх байгалийн процессыг ашигласан AQB шийдэл.</p>
        </section>
        <section className="redesign-clinical-case redesign-clinical-case-secondary" aria-labelledby="case-three-heading">
          <header><b>CASE 03</b><h3 id="case-three-heading">Шүдний гажиг заслын эмчилгээний тулгуур болгон ашигласан AQB имплант</h3></header>
          <p className="redesign-case-metadata">Суулгах үед 55 настай эмэгтэй | 10+ жилийн AQB хяналт</p>
          <div className="redesign-case-sequence">
            <Evidence src="/images/aqb-nomination/clinical-case-03-before.jpg" alt="Before orthodontic treatment with AQB implant anchorage" label="ЭМЧИЛГЭЭНИЙ ӨМНӨ" />
            <i aria-hidden="true">→</i>
            <Evidence src="/images/aqb-nomination/clinical-case-03-treatment.jpg" alt="During orthodontic treatment with AQB implant anchorage" label="ШҮДНИЙ ГАЖИГ ЗАСЛЫН ЭМЧИЛГЭЭНИЙ ҮЕ" />
            <i aria-hidden="true">→</i>
            <Evidence src="/images/aqb-nomination/clinical-case-03-follow-up.jpg" alt="Long-term result following orthodontic treatment with AQB implant anchorage" label="УРТ ХУГАЦААНЫ ХЯНАЛТ" />
          </div>
          <p>AQB имплантыг тогтвортой тулгуур болгон ашиглаж шүдний гажиг заслын эмчилгээг хийсэн. Урт хугацааны хяналтаар эмчилгээний дараах шүдний байрлал тогтвортой хадгалагдсан байна.</p>
          <p className="redesign-case-evidence">10+ жилийн AQB хяналт · 8 жил 4 сарын дараах үр дүн</p>
        </section>
        <footer className="redesign-case-footer">Тогтвортой ясны нэгдэл. Шүдний гажиг заслын эмчилгээний найдвартай тулгуур болсон AQB шийдэл.</footer>
        <PageNumber value="05" />
      </section>

      <section className="redesign-page redesign-history-page">
        <RunningHead />
        <header className="redesign-heading"><p>07 / JAPANESE CLINICAL HERITAGE</p><h2>Цаг хугацаагаар батлагдсан технологи.</h2><span>AQB-ийн 30+ жилийн замнал.</span></header>
        <div className="redesign-history-phases">
          {historyPhases.map(({ number, title, range, milestones }) => <section className={`redesign-history-phase redesign-history-phase-${number}`} key={number}>
            <header><b>{number}</b><div><strong>{title}</strong><span>{range}</span></div></header>
            <ol>{milestones.map(([year, milestone, body]) => <li className={year === "1994" ? "redesign-history-milestone-emphasis" : ""} key={year}><b>{year}</b><div><strong>{milestone}</strong><p>{body}</p></div></li>)}</ol>
          </section>)}
        </div>
        <footer className="redesign-history-footer">30+ жилийн клиникийн хэрэглээ — хөгжүүлэлт, клиникийн туршилт, зөвшөөрөл, сургалт, тасралтгүй хөгжлийн үр дүн.</footer>
        <p className="redesign-source redesign-history-source">Source: AQB Implant System technical and clinical training materials</p>
        <PageNumber value="06" />
      </section>

      <section className="redesign-page redesign-mongolia">
        <RunningHead />
        <header className="redesign-heading"><p>08 / IMPLEMENTATION IN MONGOLIA</p><h2>Технологи.<br />Мэдлэг.<br />Клиникийн<br />туршлага.</h2></header>
        <div className="redesign-mongolia-intro"><span>AQB-г зөвхөн бүтээгдэхүүн бус — технологи, мэргэжлийн мэдлэг, сургалт, клиникийн туршлагын хамт Монголд нэвтрүүлж байна.</span></div>
        <div className="redesign-pillars"><article><b>01</b><h3>ТЕХНОЛОГИ</h3><p>Re-crystallized HA гадаргуугийн технологи + One-Piece бүтэц</p></article><article><b>02</b><h3>СУРГАЛТ</h3><p>Японы AQB мэргэжилтнүүдийн клиникийн мэдлэг, сургалтын тогтолцоог Монголын шүдний эмч нарт үе шаттайгаар нэвтрүүлэх</p></article><article><b>03</b><h3>КЛИНИК ТУРШЛАГА, ЗӨВЛӨМЖ</h3><p>AQB технологийг шинээр суралцагчдад тухайн бодит кейс бүрт Японы мэргэжлийн эмч, профессорын клиникийн зөвлөмж, удирдамжийг хүргэх.</p></article></div>
        <section className="redesign-mongolia-value" aria-labelledby="mongolia-value-heading">
          <h3 id="mongolia-value-heading">МОНГОЛД БИЙ БОЛГОХ ҮНЭ ЦЭН</h3>
          <div>
            <article><b>ЭМЧИД</b><strong>ЭНГИЙН АЖИЛЛАГАА, ҮНЭТЭЙ ЦАГИЙН ХЭМНЭЛТ</strong><p>One-Piece, 1-stage концепци нь эмчилгээний үе шатыг цөөлж, эмчийн ажлын урсгалыг илүү энгийн, цэгцтэй болгох боломжтой. Ингэснээр эмчийн цаг, давтан ажилбарын ачааллыг бууруулах практик давуу талтай.</p></article>
            <article><b>ӨВЧТӨНД</b><strong>ЦӨӨН ҮЕ ШАТ, ХУРДАН НӨХӨН СЭРГЭЭЛТ</strong><p>Нэг үе шаттай суулгалтын концепци нь давтан мэс ажилбарын хэрэгцээг багасгаж, эмчилгээний нийт хугацааг богиносгох боломж бүрдүүлнэ. Тохирох клиникийн нөхцөлд ойролцоогоор 2 сарын дараа эцсийн шүдэлбэрийн шатанд шилжих боломжтой.</p></article>
            <article><b>ЭДИЙН ЗАСАГТ</b><strong>ЦАГ, ЭМЧИЛГЭЭНИЙ ҮЕ ШАТ, ЗАРДЛЫН ХЭМНЭЛТ</strong><p>Эмч, өвчтөн аль алиных нь давтан үзлэг, ажилбар, зарцуулах цагийг бууруулах боломж нь эмчилгээний шууд болон шууд бус зардлыг хэмнэх ач холбогдолтой.</p></article>
            <article><b>НИЙГЭМД</b><strong>УРТ ХУГАЦААНЫ АМНЫ ХӨНДИЙН ЭРҮҮЛ МЭНД</strong><p>Японд 30 гаруй жил клиникт хэрэглэгдсэн AQB технологи, мэргэжлийн мэдлэг, сургалтын тогтолцоог Монголд нэвтрүүлэх нь урт хугацаанд тогтвортой шүдний нөхөн сэргээх эмчилгээний сонголтыг нэмэгдүүлж, хүн амын амны хөндийн эрүүл мэнд, амьдралын чанарыг дэмжих боломжтой.</p></article>
          </div>
        </section>
        <blockquote>AQB — эмч, өвчтөний үнэтэй цаг, эмчилгээний үе шат, зардлыг хэмнэхийн зэрэгцээ Японы 30+ жилийн клиникийн туршлагад тулгуурласан урт хугацааны шүдний нөхөн сэргээх эмчилгээний шинэ боломжийг Монголд нэвтрүүлэх инноваци.</blockquote>
        <footer className="redesign-mongolia-footer"><b>MARMANSU LLC</b><span>AQB Implant System-ийн Монгол дахь албан ёсны дистрибьютор</span></footer>
        <PageNumber value="07" />
      </section>
    </main>
  );
}
