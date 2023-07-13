'use client'

import { CvContent } from '@components/content/CvContent'
import { FlexGrowLayout } from '@components/layouts'
import { ArticleLayout } from '@components/layouts/ArticleLayout'

export default function Page() {
    return (
        <>
            <ArticleLayout>
                <FlexGrowLayout>
                    <CvContent />
                </FlexGrowLayout>
            </ArticleLayout>
        </>
    )
}
