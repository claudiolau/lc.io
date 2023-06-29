const navigationLinks = [
    { text: 'home', href: '/' },
    { text: 'project', href: '/blog' },
    { text: 'contact', href: '/contact' },
]

export const Navbar = () => (
    <nav
        className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 pt-4 md:relative md:overflow-auto"
        id="nav"
    >
        <div className="flex flex-row pr-10">
            {navigationLinks.map((link, index) => (
                <a
                    key={index}
                    className="flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                    href={link.href}
                    style={{
                        marginRight:
                            index !== navigationLinks.length - 1 ? '1rem' : '0',
                    }}
                >
                    <span className="relative px-2 py-1">
                        {link.text}
                        <div className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"></div>
                    </span>
                </a>
            ))}
        </div>
    </nav>
)
