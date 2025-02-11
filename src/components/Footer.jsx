import Link from "next/link";
import LogoImg from "/public/assets/shared/desktop/logo.svg";
import { navLinks } from "@/constants";
import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const socials = [
    {
      img: "/assets/shared/desktop/icon-facebook.svg",
      path: "https://www.facebook.com",
    },
    {
      img: "/assets/shared/desktop/icon-twitter.svg",
      path: "https://www.x.com",
    },
    {
      img: "/assets/shared/desktop/icon-instagram.svg",
      path: "https://www.instagram.com",
    },
  ];
  return (
    <footer className="bg-black text-white">
      <div className="base-container pt-14 pb-10 before:w-[101px] before:h-1 before:bg-orange before:inline-block before:absolute relative before:top-0 before:left-2/4 before:-translate-x-2/4 md:before:left-5 md:before:translate-x-0">
        <div className="flex flex-col items-center mb-12 md:items-start xl:flex-row xl:justify-between xl:items-center">
          <Link href="/">
            <img
              className="w-[143px] h-[25px] object-cover mb-12 xl:mb-0"
              src={LogoImg.src}
              alt="Logo"
              width={143}
              height={25}
            />
          </Link>
          <ul className="flex flex-col items-center md:flex-row md:gap-8">
            {navLinks.map(({ path, text }, index) => (
              <li key={index}>
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })} text-white uppercase md:p-0`}
                  href={path}
                >
                  {t(`${text}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mb-12">
          <div className="xl:max-w-[540px]">
            <p className="text-white opacity-50 mb-12 text-center md:text-left">
              {t("footertext").toLowerCase()}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row items-center justify-between md:gap-0">
          <p className="font-bold text-sm text-white opacity-50 text-center">
            {t("copyright")}
          </p>
          <ul className="flex gap-4 items-center justify-center">
            {socials.map(({ img, path }, index) => {
              return (
                <li key={index}>
                  <a href={path} target="_blank">
                    <img src={img} alt={path} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
