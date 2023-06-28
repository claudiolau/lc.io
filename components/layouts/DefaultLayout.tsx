import { FC, PropsWithChildren } from 'react'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex h-full flex-col items-center">{children}</div>
}
