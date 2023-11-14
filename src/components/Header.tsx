import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-6xl mx-auto sticky top-0">
      <Logo />
      <Navigation />
    </header>
  );
}
