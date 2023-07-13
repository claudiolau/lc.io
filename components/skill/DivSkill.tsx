import { FC, PropsWithChildren } from 'react'

export const DivSkill: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 p-2 ">
                {children}
            </div>
        </>
    )
}
