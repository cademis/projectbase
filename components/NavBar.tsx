import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center w-full justify-between h-16">
      <div className="flex gap-4">
        <Link href={"/"} className="flex items-center ml-4">
          Home
        </Link>
        <Link href={"/"} className="flex items-center">
          Page
        </Link>
      </div>
      <div className="flex gap-4">
        <span className="flex items-center">Login</span>
        <ModeToggle />
      </div>
    </nav>
  );
}
