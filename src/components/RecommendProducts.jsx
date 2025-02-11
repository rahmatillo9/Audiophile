import Image from "next/image";
import MyButton from "./MyButton";

export default function RecommendProducts() {
  const prod = [
    {
      title: "XX99 MARK II",
      img: {
        mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
        tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
        desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
      },
    },
    {
      title: "XX99 MARK I",
      img: {
        mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
        tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
        desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
      },
    },
    {
      title: "ZX9 SPEAKER",
      img: {
        mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ];
  return (
    <section className="py-16 xl:py-20">
      <div className="base-container">
        <h2 className="text-2xl font-bold mb-10 uppercase text-center md:text-3xl md:mb-14 xl:mb-16 xl:gap-8">
          You may also like
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-3 w-full gap-14">
          {prod.map(({ title, img }) => {
            return (
              <li className="flex flex-col items-center w-full text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-8">{title}</h3>
                  <MyButton
                    text="See Product"
                    as="link"
                    variant="orange"
                    href={`/details/${title
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                  />
                </div>
                <div className="-order-1">
                  <picture>
                    <source media="(min-width: 1280px)" srcSet={img.desktop} />
                    <source media="(min-width: 768px)" srcSet={img.tablet} />
                    <Image
                      className="mb-8 w-[327px] h-[120px] md:w-[223px] md:h-[318px] md:mb-10 xl:w-[350px] xl:h-[318px]"
                      src={img.mobile}
                      width={327}
                      height={120}
                      alt={title}
                    />
                  </picture>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
