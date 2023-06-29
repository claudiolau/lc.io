import { FC, PropsWithChildren } from 'react'

export const SpacingLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="mb-8 mt-8 flex flex-col space-y-4">{children}</div>
}
