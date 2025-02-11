"use client";
import Image from "next/image";
import MyButton from "./MyButton";
import IconHamburger from "/public/assets/shared/tablet/icon-hamburger.svg";
import LogoImg from "/public/assets/shared/desktop/logo.svg";
import IconCart from "/public/assets/shared/desktop/icon-cart.svg";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { navLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      text: t("headphones"),
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      delay: "delay-0",
    },
    {
      text: t("speakers"),
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      delay: "delay-500",
    },
    {
      text: t("earphones"),
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      delay: "delay-1000",
    },
  ];

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <header className="bg-black py-8">
      <div className="base-container flex justify-between items-center">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className="inline-block cursor-pointer hover:opacity-90 active:scale-90 transition-transform md:mr-10 xl:hidden"
          htmlFor="hamburger"
        >
          <img src={IconHamburger.src} alt="" aria-hidden="true" />
        </button>
        <div
          className={`bg-white absolute z-50 top-[89px] w-full left-0 right-0 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          } xl:hidden`}
        >
          <div className="w-full shadow-sm">
            <ul className="flex flex-col gap-16 w-full pt-20 px-6 pb-10 md:flex-row">
              {menuItems.map(({ text, image, delay }, index) => {
                return (
                  <li
                    className={`w-full relative ${delay} ${
                      open ? "animate-slide-top" : ""
                    }`}
                    key={index + text}
                  >
                    <div className="flex flex-col items-center justify-end bg-gray rounded-[8px] min-h-[165px]">
                      <div className="flex flex-col items-center">
                        <h3 className="text-sm font-bold mb-2">{text}</h3>
                        <MyButton text={t("shop")} variant="link" />
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
        </div>

        <Link href="/">
          <img
            className="w-[143px] h-[25px] object-cover md:mr-auto"
            src={LogoImg.src}
            alt="Logo"
            width={143}
            height={25}
          />
        </Link>

        <nav className="hidden xl:block mx-auto">
          <ul className="flex">
            {navLinks.map(({ path, text }, index) => {
              return (
                <li key={index}>
                  <Link
                    className={`${buttonVariants({
                      variant: "link",
                    })} text-white uppercase tracking-wide !font-bold`}
                    href={`/${locale}${
                      path.startsWith("/") ? path : `/${path}`
                    }`}
                  >
                    {t(text.toLowerCase())}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <select
          value={locale}
          onChange={handleLanguageChange}
          className="bg-transparent text-white border border-white rounded px-2 py-1 mr-4 cursor-pointer outline-none"
        >
          <option value="en" className="bg-black">
            English
          </option>
          <option value="uz" className="bg-black">
            O'zbek
          </option>
          <option value="ru" className="bg-black">
            Русский
          </option>
        </select>

        <button>
          <img src={IconCart.src} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
