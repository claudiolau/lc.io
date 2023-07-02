'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

type INavLink = {
    text: string
    href: string
}
const navigationLinks: INavLink[] = [
    { text: 'home', href: '/' },
    { text: 'project', href: '/project' },
    { text: 'contact', href: '/contact' },
]

export const Navbar = () => {
    const pathname = usePathname()

    const activeLink = (link: INavLink) => (
        <span className="relative mr-4 py-1">
            {link.href === pathname ? (
                <>
                    <div className="text-black">{link.text}</div>
                    <div className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"></div>
                </>
            ) : (
                <div className="text-neutral-400 hover:text-black">
                    {link.text}
                </div>
            )}
        </span>
    )

    return (
        <nav
            className="fade relative mt-8 flex scroll-pr-6 flex-row items-start px-0 pb-0 pt-4 md:relative md:overflow-auto"
            id="nav"
        >
            <div className="flex flex-row pr-10">
                {navigationLinks.map((link, index) => (
                    <a
                        key={index}
                        className="flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                        href={link.href}
                    >
                        {activeLink(link)}
                    </a>
                ))}
            </div>
        </nav>
    )
}
