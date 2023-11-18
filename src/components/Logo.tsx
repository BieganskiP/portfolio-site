import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className=" font-black uppercase bg-clip-text text-transparen tracking-widest"
    >
      <span className="text-3xl text-white">spec</span>
      <span className="text-2xl text-red">net</span>
    </Link>
  );
}
