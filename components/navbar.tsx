"use client";

import { MenuIcon, SmileIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-4 w-full h-16 border-b border-border/40 bg-background z-50">
      <div className="px-8 md:px-52 h-full">
        <nav className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <SmileIcon className="h-6 w-6" />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/resume"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Resume
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/works"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Works
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/" className="flex items-center space-x-2">
              <SmileIcon className="h-6 w-6" />
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto !pb-0">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <SmileIcon className="h-6 w-6" />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4  mb-2">
                </Accordion>
                <div className="flex flex-col gap-6">
                  <Link
                    href="/resume"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/works"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Works
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </div>
                <Link href="/" className="flex items-center space-x-2 mt-6">
                  <SmileIcon className="h-6 w-6" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
