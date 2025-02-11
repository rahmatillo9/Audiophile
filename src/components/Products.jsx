import React from "react";
import OneProduct from "./OneProduct";

export default function Products({ globalData, param }) {
  return (
    <section className="py-16 md:py-20">
      <div className="base-container">
        <ul className="flex flex-col gap-28 xl:gap-40">
          {globalData.map(
            ({ description, new: isNew, name, image, slug }, index) => {
              return (
                <li className="group" key={index}>
                  <OneProduct
                    slug={slug}
                    description={description}
                    isNew={isNew}
                    currentParam={param}
                    name={name}
                    image={image}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
