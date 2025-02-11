import Back from "@/components/Back";
import BestGear from "@/components/BestGear";
import Features from "@/components/Features";
import GridImages from "@/components/GridImages";
import OneProductDetails from "@/components/OneProductDetails";
import OtherPageReferences from "@/components/OtherPageReferences";
import RecommendProducts from "@/components/RecommendProducts";
import { getData } from "@/request";
import { notFound } from "next/navigation";

export default async function page({ params: { details, category } }) {
  const globalData = await getData({
    query: `?slug=${details}&category=${category}`,
  });

  if (!globalData.length) notFound();

  const {
    name,
    image,
    description,
    amount,
    new: isNew,
    price,
    features,
    includes,
    gallery,
  } = globalData[0];

  return (
    <>
      <Back />
      <OneProductDetails
        amount={amount}
        description={description}
        image={image}
        isNew={isNew}
        price={price}
        title={name}
      />
      <Features features={features} includes={includes} />
      <GridImages gallery={gallery} />
      <RecommendProducts />
      <OtherPageReferences />
      <BestGear />
    </>
  );
}
