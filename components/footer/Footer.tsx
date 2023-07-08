import { GithubIcon, LinkedinIcon } from '@components/assets'

import { FC } from 'react'
export const Footer: FC = () => {
    return (
        <>
            <div className="p-8">
                <footer className="border-t pt-4"></footer>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <LinkedinIcon />
                        <GithubIcon />
                    </div>
                    <p className="text-right text-neutral-400">
                        Designed by lc.io
                    </p>
                </div>
            </div>
        </>
    )
}
