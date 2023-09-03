import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function SideBar() {
  return (
    <ScrollArea className="h-screen w-40">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-1">
            All Projects
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col">
              <li>
                <Link href={"/"}>Project1</Link>
              </li>
              <li>
                <Link href={"/"}>Project2</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-1">
            Secondary Project
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <Link href={"/"}>Project3</Link>
              <Link href={"/"}>Project4</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
}
