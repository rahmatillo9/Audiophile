import BestGear from "@/components/BestGear";
import IndexHero from "@/components/IndexHero";
import IndexSpeakers from "@/components/IndexSpeakers";
import OtherPageReferences from "@/components/OtherPageReferences";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <IndexHero t={t} />
      <OtherPageReferences t={t} />
      <IndexSpeakers t={t} />
      <BestGear t={t} />
    </>
  );
}
