import BestGear from "@/components/BestGear";
import OtherPageHero from "@/components/OtherPageHero";
import OtherPageReferences from "@/components/OtherPageReferences";
import Products from "@/components/Products";
import { getData } from "@/request";
import { notFound } from "next/navigation";

export default async function page({ params: { category } }) {
  const globalData = await getData({ query: `?category=${category}` });

  if (!globalData.length) notFound();

  return (
    <>
      <OtherPageHero text={category} />
      <Products globalData={globalData} param={category} />
      <OtherPageReferences />
      <BestGear />
    </>
  );
}
