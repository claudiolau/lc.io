'use client'

import { ArticleLayout } from '@components/layouts/ArticleLayout'
import { HomeContent } from '@components/content/HomeContent'
import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'
import { FlexGrowLayout } from '@components/layouts'

export default function Home() {
    return (
        <ArticleLayout>
            <FlexGrowLayout>
                <Navbar />
                <HomeContent />
            </FlexGrowLayout>
            <Footer />
        </ArticleLayout>
    )
}
