import { GithubIcon, LinkedinIcon } from '@components/assets'

import { FC } from 'react'
export const Footer: FC = () => {
    return (
        <>
            <div className="pb-8">
                <footer className="border-t pt-4"></footer>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <LinkedinIcon />
                        <GithubIcon />
                    </div>
                    <p className="text-right text-sm text-neutral-400">
                        Copyright © LC CO., Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}
