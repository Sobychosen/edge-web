import Image from "next/image";

type NavButtonProps = {
  icon: string;
  alt: string;
  label?: string;
};

export default function NavButton({ icon, alt, label }: NavButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
    >
      <Image src={icon} alt={alt} width={20} height={20} />
      {label && <span>{label}</span>}
    </button>
  );
}
