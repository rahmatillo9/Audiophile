import Image from "next/image";
export default function GridImages({ gallery }) {
  const { first, second, third } = gallery;
  return (
    <section className="pt-11 pb-16 md:pt-16 xl:py-20">
      <div className="base-container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2">
          <div className="md:col-start-1 md:col-end-2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={first.desktop} />
              <source media="(min-width: 768px)" srcSet={first.tablet} />
              <Image
                className="w-full h-full object-cover object-center"
                src={first.mobile}
                width={327}
                height={174}
                alt="First image"
              />
            </picture>
          </div>
          <div className="md:col-start-1 md:col-end-2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={second.desktop} />
              <source media="(min-width: 768px)" srcSet={second.tablet} />
              <Image
                className="w-full h-full object-cover object-center"
                src={second.mobile}
                width={327}
                height={174}
                alt="Second image"
              />
            </picture>
          </div>
          <div className="md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
            <picture>
              <source media="(min-width: 1280px)" srcSet={third.desktop} />
              <source media="(min-width: 768px)" srcSet={third.tablet} />
              <Image
                className="w-full h-full object-cover object-center"
                src={third.mobile}
                width={327}
                height={368}
                alt="Third image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
