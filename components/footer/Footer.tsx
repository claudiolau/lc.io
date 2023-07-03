import { GithubIcon } from '@components/assets/GithubIcon'
import { FC } from 'react'
export const Footer: FC = () => {
    return (
        <>
            <div className="p-8">
                <footer className="border-t pt-4"></footer>
                <div className="flex items-center justify-between">
                    <GithubIcon />
                    <p className="text-right">Designed by lc.io</p>
                </div>
            </div>
        </>
    )
}
