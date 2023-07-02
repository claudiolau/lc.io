import { FC, PropsWithChildren } from 'react'

export const FlexGrowLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex-1">{children}</div>
}
