'use client'

import { PortfolioContent } from '@components/content/PortfolioContent'
import { Footer } from '@components/footer'
import { FlexGrowLayout } from '@components/layouts'
import { ArticleLayout } from '@components/layouts/ArticleLayout'
import { Navbar } from '@components/navbar'

export default function Page() {
    return (
        <ArticleLayout>
            <FlexGrowLayout>
                <Navbar />
                <PortfolioContent />
            </FlexGrowLayout>
            <Footer />
        </ArticleLayout>
    )
}
