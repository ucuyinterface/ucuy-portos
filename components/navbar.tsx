"use client"

import * as React from "react"
import Link from "next/link"
import { SmileIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b border-border/40 bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <SmileIcon className="h-6 w-6" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
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
        </nav>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
        >
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

