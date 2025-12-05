"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="#"
                            className="font-mono text-xl font-bold text-white tracking-tight hover:text-accent transition-colors"
                        >
                            <span className="text-accent">&gt;_</span> NoahOlsen.co
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="#hero"
                                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                THE_LAB
                            </Link>
                            <Link
                                href="#projects"
                                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                PROJECTS
                            </Link>
                            <Link
                                href="#dog-log"
                                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                DOG_LOG
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://github.com/noahtolsen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs bg-card border border-white/10 hover:border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            git checkout main
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg border-b border-white/10">
                        <Link
                            href="#hero"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            THE_LAB
                        </Link>
                        <Link
                            href="#projects"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            PROJECTS
                        </Link>
                        <Link
                            href="#dog-log"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            DOG_LOG
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
