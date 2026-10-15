import Image from "next/image";

export default function Avatar() {
  return (
    <button type="button" className="rounded-full">
      <Image
        src="/icons/user.jpg"
        alt="Your profile"
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover ring-2 ring-emerald-500"
      />
    </button>
  );
}
