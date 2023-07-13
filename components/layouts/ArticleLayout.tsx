import { FC, PropsWithChildren } from 'react'

export const ArticleLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="mx-4 flex min-h-screen min-w-0 flex-auto flex-col px-2 md:px-0 ">
            {children}
        </main>
    )
}
