import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { ComboboxContract } from "./combobox";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between m-2 overflow-visible">
      <div className="flex gap-4">
        <ComboboxContract />
      </div>
      <div className="flex gap-4">
        <span className="flex items-center">Login</span>
        <ModeToggle />
      </div>
    </nav>
  );
}
