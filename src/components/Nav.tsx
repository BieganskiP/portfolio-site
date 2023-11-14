import links from "@/data/NavigationLinks.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <ul className="flex">
      {links.map((linkItem, index) => {
        const isActive = pathname === linkItem.url;
        return (
          <li
            key={index}
            className={`m-3 text-xl hover:text-pink ${
              isActive ? "text-pink" : ""
            }`}
          >
            <Link href={linkItem.url}>{linkItem.link}</Link>
          </li>
        );
      })}
    </ul>
  );
}
