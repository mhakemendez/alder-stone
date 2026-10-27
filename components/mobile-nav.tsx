"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Close, Menu, Phone } from "@/components/ui/icons";
import { navLinks, site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <Close className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-canvas lg:hidden"
        >
          <nav aria-label="Mobile" className="px-5 pb-8 pt-4 sm:px-8">
            <ul className="divide-y divide-line">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center justify-between text-base text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <Button
                href="/#contact"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Start a project
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
