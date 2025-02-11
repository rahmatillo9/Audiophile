import Link from "next/link";

export default function Back() {
  return (
    <div className="py-6 xl:py-16 base-container">
      <Link className="text-black-50 hover:underline" href={"./"}>
        Go Back
      </Link>
    </div>
  );
}
