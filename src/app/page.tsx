import { HomeContent } from '@components/content/HomeContent'
import { DefaultLayout } from '@components/layouts'
import { ArticleLayout } from '@components/layouts/ArticleLayout'
import { Navbar } from '@components/navbar'

export default function Home() {
    return (
        <ArticleLayout>
            <Navbar />
            <HomeContent />
        </ArticleLayout>
    )
}
