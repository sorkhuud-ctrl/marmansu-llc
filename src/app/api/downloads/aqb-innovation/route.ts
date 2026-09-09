import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fileName = "AQB-Innovation-Mongolia-2026.pdf";
const filePath = join(process.cwd(), "public", "downloads", fileName);

export const runtime = "nodejs";

export async function GET() {
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": file.byteLength.toString(),
      "Content-Type": "application/pdf",
    },
  });
}
