import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Separator } from "./ui/separator";

const accordianMenuItems = [
  {
    menuItemId: "1",
    menuItemTitle: "Tables",
    subItems: [
      {
        subItemTitle: "Payments",
        subItemId: "1",
        url: "/payments",
      },
      {
        subItemTitle: "Project Search",
        subItemId: "2",
        url: "#",
      },
    ],
  },
  {
    menuItemId: "3",
    menuItemTitle: "Settings",
    subItems: [
      {
        subItemTitle: "General Settings",
        subItemId: "1",
        url: "#",
      },
      {
        subItemTitle: "Advanced Settings",
        subItemId: "2",
        url: "#",
      },
    ],
  },
];

export default function SideBar() {
  return (
    <ScrollArea className="h-screen w-48 m-4">
      <Link
        href={"#"}
        className="flex flex-1 items-center justify-between font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 py-1"
      >
        Dashboard
      </Link>
      <Separator />
      <Accordion type="single" collapsible>
        {accordianMenuItems.map((item) => {
          return (
            <AccordionItem
              key={item.menuItemId}
              value={item.menuItemId}
            >
              <AccordionTrigger className="py-1">
                {item.menuItemTitle}
              </AccordionTrigger>

              <AccordionContent>
                <ul className="flex flex-col ml-2">
                  {item.subItems.map((subItem) => {
                    return (
                      <li
                        key={subItem.subItemId}
                        className="hover:underline"
                      >
                        <Link href={subItem.url}>
                          {subItem.subItemTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </ScrollArea>
  );
}
