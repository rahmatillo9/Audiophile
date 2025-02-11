import { ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

export default function MyButton({ as, text, variant, href = "" }) {
  let finalResult = {};
  switch (variant) {
    case "orange":
      finalResult = {
        className: "!bg-orange !text-white !hover:bg-light-orange !border-none",
        icon: null,
      };
      break;
    case "outline":
      finalResult = {
        className:
          "!bg-transparent !text-black !hover:bg-black !hover:text-white !border !border-black",
        icon: null,
      };
      break;
    case "link":
      finalResult = {
        className:
          "!bg-transparent !text-black-50 !hover:text-orange !hover:bg-transparent !border-none",
        icon: <ChevronRight className="text-orange" />,
      };
      break;
  }

  return (
    <>
      {as === "button" ? (
        <Button
          className={`rounded-none shadow-none min-w-40 uppercase ${finalResult.className}`}
        >
          {text} {finalResult.icon}
        </Button>
      ) : (
        <Link
          href={href}
          className={`${buttonVariants({
            variant: "default",
          })} rounded-none shadow-none min-w-40 uppercase ${
            finalResult.className
          }`}
        >
          {text} {finalResult.icon}
        </Link>
      )}
    </>
  );
}
