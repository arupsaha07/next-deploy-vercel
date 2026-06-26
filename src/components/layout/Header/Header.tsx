import { Logo } from "./Logo";
import { NavActions } from "./NavActions";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <Logo />

        <div className="flex-1">
          <SearchBar />
        </div>

        <NavActions />
      </div>
    </header>
  );
}