import { FC, PropsWithChildren } from 'react'

export const ArticleLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="mt-8 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            {children}
        </main>
    )
}
