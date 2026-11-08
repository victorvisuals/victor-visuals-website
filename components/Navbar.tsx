"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Digital", href: "/#digital" },
  { label: "Creative", href: "/#creative" },
  { label: "Tech", href: "/#tech" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <a className="brand-lockup" href="/#home" onClick={() => setOpen(false)} aria-label="Victor Visuals home">
          <Image src="/images/logo.png" alt="" width={48} height={48} priority />
          <span className="brand-wordmark"><strong>VICTOR VISUALS</strong><small>CREATIVE · MEDIA · DIGITAL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a className="nav-link" key={link.label} href={link.href}>{link.label}</a>)}
          <a className="nav-cta" href="/#contact">Request a quote <span aria-hidden="true">↗</span></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-nav__cta" href="/#contact" onClick={() => setOpen(false)}>Request a quote <span aria-hidden="true">↗</span></a>
        </nav>
      ) : null}
    </header>
  );
}
