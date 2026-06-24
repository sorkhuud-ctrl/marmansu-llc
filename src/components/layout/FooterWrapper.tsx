import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import type { CpMenusData } from "@/graphql/cms/queries/menu";
import { Footer, FooterItem } from "./Footer";

export async function FooterWrapper({ locale }: { locale: string }) {
  let items: FooterItem[] = [];
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpMenusData>({
      query: CP_MENUS,
      variables: { language: locale, kind: "footer" },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    items =
      data?.cpMenus
        ?.filter((item) => item.kind === "footer")
        .map((item) => ({
          _id: item._id,
          label: item.label ?? "",
          url: item.url ?? "",
          order: item.order ?? 0,
        })) ?? [];
  } catch {
    items = [];
  }

  return <Footer items={items} />;
}
