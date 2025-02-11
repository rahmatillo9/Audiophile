import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-transparent text-white border-none outline-none cursor-pointer"
    >
      <option value="uz" className="text-black">
        O'zbek
      </option>
      <option value="en" className="text-black">
        English
      </option>
      <option value="ru" className="text-black">
        Русский
      </option>
    </select>
  );
}
