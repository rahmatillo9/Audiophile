import Image from "next/image";
import MyButton from "./MyButton";

export default function OtherPageReferences({ t }) {
  const menuItems = [
    {
      text: t("headphones"),
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      delay: "delay-0",
    },
    {
      text: t("spekers"),
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      delay: "delay-500",
    },
    {
      text: t("earphones"),
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      delay: "delay-1000",
    },
  ];
  return (
    <section className="py-14 xl:py-20">
      <div className="base-container">
        <ul className="flex flex-col gap-16 w-full pt-20 px-6 pb-10 md:flex-row">
          {menuItems.map(({ text, image, delay }, index) => {
            return (
              <li
                className={`w-full relative ${delay} animate-slide-top`}
                key={index}
              >
                <div className="flex flex-col items-center justify-end bg-gray rounded-[8px] min-h-[165px]">
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-bold mb-2">{text}</h3>
                    <MyButton
                      text={t("shop")}
                      variant="link"
                      as="link"
                      href={`/categories/${text.toLowerCase()}`}
                    />
                  </div>
                  <Image
                    className="w-[100px] h-[100px] object-cover -order-1 absolute top-0 -translate-y-1/3"
                    width={100}
                    height={100}
                    src={image}
                    alt={text}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
