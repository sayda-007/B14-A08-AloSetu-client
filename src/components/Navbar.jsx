
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './Navbar.css';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Upcoming Events', href: '/upcoming-events' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (href) => {
        return href === '/'
            ? pathname === '/'
            : pathname.startsWith(href);
    };

    return (
        <header className="alosetu-navbar">
            <nav className="alosetu-navbar-inner" aria-label="Main navigation">
                <Link
                    href="/"
                    className="alosetu-brand"
                    aria-label="AloSetu home"
                    onClick={closeMenu}
                >
                    <Image
                        src="/alosetu-logo-horizontal.svg"
                        alt="AloSetu"
                        width={180}
                        height={60}
                        priority
                        sizes="(max-width: 767px) 156px, 180px"
                        className="alosetu-brand-image"
                    />
                </Link>

                <div className="alosetu-desktop-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`alosetu-nav-link ${isActive(item.href) ? 'active' : ''
                                }`}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="alosetu-desktop-actions">
                    <Link href="/login" className="alosetu-login">
                        Login
                    </Link>

                    <Link href="/register" className="alosetu-cta">
                        Get Started
                    </Link>
                </div>

                <button
                    type="button"
                    className="alosetu-menu-button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={
                        isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="alosetu-mobile-navigation"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="alosetu-menu-icon"
                        aria-hidden="true"
                    >
                        {isMenuOpen ? (
                            <path d="M6 6L18 18M18 6L6 18" />
                        ) : (
                            <>
                                <path d="M4 7H20" />
                                <path d="M4 12H20" />
                                <path d="M4 17H20" />
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            <div
                id="alosetu-mobile-navigation"
                className={`alosetu-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
            >
                <div className="alosetu-mobile-menu-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className={`alosetu-mobile-nav-link ${isActive(item.href) ? 'active' : ''
                                }`}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="alosetu-mobile-actions">
                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className="alosetu-mobile-login"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            onClick={closeMenu}
                            className="alosetu-mobile-cta"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
