import { LoblawsLogo } from '@components/assets/Loblaws'
import { SpacingLayout } from '@components/layouts'
import { FC } from 'react'

export const HomeContent: FC = ({}) => {
    return (
        <SpacingLayout>
            <h2 className="mt-8">hey, I am claudio 🙌</h2>

            <div className="mt-8">
                I'm a frontend developer, optimist, and community builder. I
                currently work as the developer at
                <a
                    href="https://www.loblaws.ca/"
                    target="_blank"
                    className="inline-block"
                >
                    <LoblawsLogo />
                </a>
                , where I lead the community for Next"
            </div>
        </SpacingLayout>
    )
}
