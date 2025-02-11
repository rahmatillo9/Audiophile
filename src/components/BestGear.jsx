import Image from "next/image";
import BestGearBrotherMobile from "/public/assets/shared/mobile/image-best-gear.jpg";
import BestGearBrotherTablet from "/public/assets/shared/tablet/image-best-gear.jpg";
import BestGearBrotherDesktop from "/public/assets/shared/desktop/image-best-gear.jpg";

export default function BestGear({ t }) {
  return (
    <section className="py-14">
      <div className="base-container">
        <div className="flex flex-col items-center text-center xl:flex-row xl:text-left xl:justify-between">
          <div className="xl:max-w-[445px] w-full">
            <h2 className="mb-8 font-bold text-2xl tracking-wide text-black uppercase md:text-4xl">
              {t("bestgear.title")}{" "}
              <strong className="text-orange">{t("bestgear.strong")}</strong>{" "}
              {t("bestgear.subtitle")}
            </h2>
            <p className="text-sm text-black opacity-50">
              {t("bestgear.description")}
            </p>
          </div>
          <div className="-order-1 xl:-order-none shrink-0">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={BestGearBrotherDesktop.src}
              />
              <source
                media="(min-width: 768px)"
                srcSet={BestGearBrotherTablet.src}
              />
              <Image
                className="mb-10 md:mb-16 xl:mb-0 w-[327px] h-[300px] md:w-[689px] xl:w-[540px] xl:h-[568px]"
                src={BestGearBrotherMobile.src}
                width={327}
                height={300}
                alt={t("bestgear.alt")}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
