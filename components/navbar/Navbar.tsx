'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type INavLink = {
    text: string
    href: string
}

const navigationLinks: INavLink[] = [
    { text: 'home', href: '/' },
    { text: 'portfolio', href: '/portfolio' },
    // { text: 'cv', href: '/cv' },
]

export const Navbar = () => {
    const pathname = usePathname()

    const activeLink = (link: INavLink) => {
        const isActive = link.href === pathname

        return (
            <span className="relative mr-4 py-1">
                <div
                    className={`${
                        isActive
                            ? 'text-black'
                            : 'text-neutral-400 hover:text-black'
                    }`}
                >
                    {link.text}
                </div>
                {isActive && (
                    <div className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"></div>
                )}
            </span>
        )
    }

    return (
        <nav
            className="mt-8 flex flex-row items-center justify-start px-0 pb-0 pt-4 md:relative md:overflow-auto"
            id="nav"
        >
            {navigationLinks.map((link, index) => (
                <Link
                    key={index}
                    className="flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                    href={link.href}
                >
                    {activeLink(link)}
                </Link>
            ))}
        </nav>
    )
}

export default Navbar
