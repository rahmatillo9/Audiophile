"use client";
export default function Features({ includes, features }) {
  return (
    <section className="py-11 md:py-16 xl:py-20">
      <div className="base-container flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="w-full xl:max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 uppercase md:text-3xl md:mb-8">
            Features
          </h2>
          <div className="flex flex-col gap-5">
            {features.split("\n\n").map((text, index) => {
              return (
                <p className="text-black-50" key={index}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between xl:flex-col xl:justify-stretch">
          <h2 className="text-2xl font-bold mb-6 uppercase md:text-3xl md:mb-8 w-full">
            In the box
          </h2>
          <ul className="flex flex-col gap-2 md:w-full md:justify-center">
            {includes.map(({ quantity, item }, index) => {
              return (
                <li className="flex items-center gap-5" key={index}>
                  <span className="font-medium text-orange inline-block w-7 text-center">
                    {quantity}x
                  </span>
                  <p className="text-black-50">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
