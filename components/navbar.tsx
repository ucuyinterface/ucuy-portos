"use client";

import { MenuIcon, SmileIcon } from "lucide-react";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="py-4 w-full h-20 border-b border-border/40 bg-background z-50">
      <div className="px-8 md:px-72 h-full">
        <nav className="flex h-full items-center justify-between">
          <Link href="/" className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-accent border border-gray-200 shadow-sm ${pathname === '/' ? 'bg-accent/80' : ''}`}>
            <SmileIcon className="h-6 w-6" />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>

              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-semibold transition-colors hover:text-red-500 ${pathname === item.href
                      ? 'text-red-500'
                      : 'text-muted-foreground'
                      }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))
              }
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/" className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-accent border border-gray-200 shadow-sm ${pathname === '/' ? 'bg-accent/80' : ''}`}>
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
                  <SheetClose asChild key="/">
                    <Link href="/" className={`w-fit flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-accent border border-gray-200 shadow-sm ${pathname === '/' ? 'bg-accent/80' : ''}`}>
                      <SmileIcon className="h-6 w-6" />
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4  mb-2">
                </Accordion>
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                          ? 'text-red-500'
                          : 'text-muted-foreground'
                          }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))
                  }
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

