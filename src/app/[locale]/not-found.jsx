import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-14 h-full flex">
      <div className="base-container flex justify-center items-center my-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-5">404</h1>
          <Button asChild>
            <Link href="/">Bosh sahifa</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
