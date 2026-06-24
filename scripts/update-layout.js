const fs = require("fs");
const pages = [
  "src/app/[locale]/services/page.tsx",
  "src/app/[locale]/products/page.tsx",
  "src/app/[locale]/projects/page.tsx",
  "src/app/[locale]/partners/page.tsx",
  "src/app/[locale]/news/page.tsx",
  "src/app/[locale]/contact/page.tsx",
];
for (const page of pages) {
  let content = fs.readFileSync(page, "utf8");
  content = content.replace(
    'import { Header } from "@/components/layout/Header";\nimport { Footer } from "@/components/layout/Footer";',
    'import { HeaderWrapper } from "@/components/layout/HeaderWrapper";\nimport { FooterWrapper } from "@/components/layout/FooterWrapper";'
  );
  content = content.replace(/<Header \/>/g, "<HeaderWrapper locale={locale} />");
  content = content.replace(/<Footer \/>/g, "<FooterWrapper locale={locale} />");
  fs.writeFileSync(page, content, "utf8");
  console.log("updated", page);
}
