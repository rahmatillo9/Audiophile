import Image from "next/image";
import MyButton from "./MyButton";

export default function OneProduct({
  image,
  description,
  name,
  slug,
  isNew,
  currentParam,
}) {
  return (
    <div
      className={`flex flex-col xl:flex-row xl:justify-between items-center`}
    >
      <div className="flex flex-col items-center xl:items-start xl:text-left text-center w-full xl:max-w-[445px]">
        {isNew && (
          <strong className="text-orange tracking-[10px] mb-6 md:mb-10 xl:mb-4 text-sm">
            NEW PRODUCT
          </strong>
        )}
        <h2 className="mb-6 text-2xl uppercase md:mb-8 md:text-4xl font-bold">
          {name}
        </h2>
        <p className="text-black-50 mb-6 xl:mb-10">{description}</p>
        <MyButton
          variant="orange"
          text="See product"
          as="link"
          href={`/categories/${currentParam}/${slug}`}
        />
      </div>
      <div className="-order-1 xl:-order-none shrink-0 xl:group-odd:-order-1">
        <picture>
          <source media="(min-width: 1280px)" srcSet={image?.desktop} />
          <source media="(min-width: 768px)" srcSet={image?.tablet} />
          <Image
            className="mb-8 md:mb-12 xl:mb-0 w-[327px] h-[352px] md:w-[689px] xl:w-[540px] xl:h-[560px] object-cover"
            src={image?.mobile}
            width={327}
            height={352}
            alt="Image"
          />
        </picture>
      </div>
    </div>
  );
}
