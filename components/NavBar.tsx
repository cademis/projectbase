import { ModeToggle } from "@/components/mode-toggle";

export default function NavBar() {
  return (
    <nav className="flex">
      <span className="flex-1">Logo</span>
      <span className="flex-1">Home</span>
      <span className="flex-1">
        <ModeToggle />
      </span>
    </nav>
  );
}
