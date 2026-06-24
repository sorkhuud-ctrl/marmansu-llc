import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import type { CpMenusData } from "@/graphql/cms/queries/menu";
import { Header, HeaderItem } from "./Header";

export async function HeaderWrapper({ locale }: { locale: string }) {
  let items: HeaderItem[] = [];
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpMenusData>({
      query: CP_MENUS,
      variables: { language: locale, kind: "header" },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    items =
      data?.cpMenus
        ?.filter((item) => item.kind === "header")
        .map((item) => ({
          _id: item._id,
          label: item.label ?? "",
          url: item.url ?? "",
          order: item.order ?? 0,
        })) ?? [];
  } catch {
    items = [];
  }

  return <Header items={items} />;
}
