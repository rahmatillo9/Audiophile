import Image from "next/image";
import MyButton from "./MyButton";
import ImageEarphoneMobile from "/public/assets/home/mobile/image-earphones-yx1.jpg";
import ImageEarphoneTablet from "/public/assets/home/tablet/image-earphones-yx1.jpg";
import ImageEarphoneDesktop from "/public/assets/home/desktop/image-earphones-yx1.jpg";

export default function IndexSpeakers({ t }) {
  return (
    <section className="py-16">
      <div className="base-container flex flex-col gap-6 md:gap-8 xl:gap-12">
        {/* Orange */}
        <div className="bg-orange flex rounded-md px-6 pt-6 pb-14 min-h-[600px]  bg-index-speakers-mobile bg-[center_top] bg-no-repeat xl:bg-index-speakers-desktop xl:bg-left-bottom md:p-16 xl:pt-28 xl:pb-32 xl:min-h-min xl:bg-60">
          <div className="flex flex-col items-center text-center mt-auto w-full md:mx-auto md:max-w-[349px] xl:text-left xl:items-start xl:mr-0">
            <h2 className="text-4xl text-white font-bold uppercase mb-6">
              {t("zx9-speaker.title")}
            </h2>
            <p className="text-white mb-6">{t("zx9-speaker.description")}</p>
            <MyButton
              text={t("see-product")}
              as="link"
              variant="black"
              href="/categories/speakers/zx9-speaker"
            />
          </div>
        </div>
        {/* Gray */}
        <div className="bg-index-speakers-gray-mobile flex md:bg-index-speakers-gray-tablet xl:bg-index-speakers-gray-desktop bg-no-repeat bg-cover rounded-md p-6 min-h-80 items-center md:p-16 md:bg-bottom xl:p-24">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-black">
              {t("zx7-speaker.title")}
            </h2>
            <MyButton
              text={t("see-product")}
              as="link"
              variant="outline"
              href="/categories/speakers/zx7-speaker"
            />
          </div>
        </div>
        {/* Light gray */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 xl:gap-12 md:grid-cols-2 w-full">
          <picture>
            <source media="(min-width: 1280px)" srcSet={ImageEarphoneDesktop} />
            <source media="(min-width: 768px)" srcSet={ImageEarphoneTablet} />
            <Image
              className="w-full h-[200px] object-cover object-center rounded-md md:min-h-80"
              width={327}
              height={200}
              alt="Earphone"
              src={ImageEarphoneMobile}
            />
          </picture>
          <div className="rounded-md p-6 min-h-[200px] bg-gray flex items-center md:min-h-80 md:p-10 w-full xl:p-24">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                {t("yx1-earphones.title")}
              </h2>
              <MyButton
                text={t("see-product")}
                as="link"
                href="/categories/earphones/yx1-earphones"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
