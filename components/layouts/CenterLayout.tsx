import { FC, PropsWithChildren } from 'react'

export const CenterLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex items-center justify-center">{children}</div>
}
