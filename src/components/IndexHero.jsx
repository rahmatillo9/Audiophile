import MyButton from "./MyButton";

export default function IndexHero({ t }) {
  return (
    <div className="bg-black bg-index-hero-mobile md:bg-index-hero-tablet xl:bg-index-hero-desktop bg-no-repeat bg-center bg-cover">
      <div className="base-container py-28 md:pt-32 md:pb-40">
        <div className="flex flex-col items-center text-center md:max-w-96 w-full md:mx-auto xl:items-start xl:text-left xl:mx-0">
          <strong className="text-sm tracking-[10px] text-white opacity-50 inline-block mb-4">
            {t("newproduct")}
          </strong>
          <h1 className="font-bold text-white text-4xl mb-6 uppercase md:text-6xl">
            {t("xx99")}
          </h1>
          <p className="text-white opacity-75 mb-7 md:mb-10">
            {t("xx99title")}
          </p>
          <MyButton
            as="link"
            variant="orange"
            text={t("xx99button")}
            href="/categories/headphones/xx99-mark-two-headphones"
          />
        </div>
      </div>
    </div>
  );
}
