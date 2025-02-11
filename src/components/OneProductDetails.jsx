import Image from "next/image";
import MyButton from "./MyButton";

export default function OneProductDetails({
  title,
  description,
  price,
  quantity,
  isNew,
  amount,
  image,
}) {
  return (
    <section className="md:mb-16 pb-11 xl:mb-20">
      <div className="flex flex-col gap-8 base-container md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col mb-8 w-full xl:max-w-[445px]">
            {isNew && (
              <strong className="text-orange tracking-[10px] mb-6 md:mb-10 xl:mb-4 text-sm">
                NEW PRODUCT
              </strong>
            )}
            <h1 className="mb-6 text-2xl uppercase md:mb-8 md:text-4xl font-bold">
              {title}
            </h1>
            <p className="text-black-50 mb-6 md:mb-8">{description}</p>
            <strong>
              {
                price
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .split(".")[0]
              }
            </strong>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center bg-gray w-32 justify-between text-sm font-bold">
              <button className="w-2/6 text-center text-black/25 hover:text-orange">
                -
              </button>
              <span className="w-full inline-block text-center">{amount}</span>
              <button className="w-2/6 text-center text-black/25 hover:text-orange">
                +
              </button>
            </div>
            <MyButton text="ADD TO CART" variant="orange" as="button" />
          </div>
        </div>
        <div className="-order-1">
          <picture>
            <source media="(min-width: 1280px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <Image
              className="w-[327px] h-[327px] object-cover md:w-[281px] md:h-[480px] xl:w-[540px] xl:h-[560px]"
              src={image.mobile}
              width={327}
              height={327}
              alt={title}
            ></Image>
          </picture>
        </div>
      </div>
    </section>
  );
}
