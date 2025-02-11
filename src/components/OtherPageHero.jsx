export default function OtherPageHero({ text = "Hero" }) {
  return (
    <div className="bg-black">
      <div className="py-8 md:py-[100px]">
        <h1 className="text-2xl font-bold tracking-[2px] text-center text-white md:text-4xl uppercase">
          {text}
        </h1>
      </div>
    </div>
  );
}
