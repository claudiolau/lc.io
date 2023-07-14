import { FC } from 'react'
import { LoblawsLogo } from '@components/assets'
import { SpacingLayout } from '@components/layouts'
import { ReactIcon } from '@components/assets/ReactIcon'
import Link from 'next/link'
import { ImageComponent } from '@components/image-grid'

export const HomeContent: FC = () => {
    return (
        <SpacingLayout>
            <h1 className=" py-2 text-2xl font-bold">Hey, I am Claudio 🙌</h1>
            <p className="py-8 font-light tracking-wide">
                I am a frontend wizard, a fervent believer in the power of
                pixels. I thrive on crafting digital experiences at
                <span className="m-2">
                    <a
                        href="https://www.loblaws.ca/"
                        target="_blank"
                        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                    >
                        <LoblawsLogo /> Loblaws
                    </a>
                </span>
                where I supercharge retail operations with our SaaS-based
                inventory and price optimization tool. Powered by
                <a
                    href="https://nextjs.org"
                    target="_blank"
                    className=" mx-2 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 inline-flex"
                    >
                        <path
                            d="M5.13979 0.00296175C5.11613 0.00511197 5.04086 0.0126378 4.97312 0.0180134C3.41075 0.158853 1.94731 1.00174 1.02043 2.29725C0.504301 3.01757 0.174194 3.83466 0.0494624 4.70012C0.00537635 5.00223 0 5.09146 0 5.50108C0 5.91069 0.00537635 5.99993 0.0494624 6.30204C0.348387 8.36732 1.81828 10.1026 3.81183 10.7455C4.16882 10.8605 4.54516 10.939 4.97312 10.9863C5.13978 11.0046 5.86022 11.0046 6.02688 10.9863C6.76559 10.9046 7.3914 10.7218 8.0086 10.4068C8.10323 10.3584 8.12151 10.3455 8.1086 10.3348C8.1 10.3283 7.69677 9.78754 7.2129 9.13388L6.33333 7.94588L5.23118 6.31494C4.62473 5.41829 4.12581 4.68507 4.12151 4.68507C4.1172 4.68399 4.1129 5.40862 4.11075 6.29343C4.10753 7.84267 4.10645 7.90503 4.0871 7.94158C4.05914 7.99426 4.03763 8.01576 3.99247 8.03941C3.95806 8.05662 3.92796 8.05984 3.76559 8.05984H3.57957L3.53011 8.02866C3.49785 8.00824 3.47419 7.98136 3.45806 7.95018L3.43548 7.9018L3.43763 5.7462L3.44086 3.58953L3.47419 3.5476C3.4914 3.52502 3.52796 3.496 3.55376 3.48202C3.59785 3.46052 3.61505 3.45837 3.80108 3.45837C4.02043 3.45837 4.05699 3.46697 4.11398 3.52932C4.13011 3.54653 4.72688 4.44532 5.44086 5.52796C6.15484 6.61059 7.13118 8.08887 7.61075 8.81457L8.48172 10.1337L8.52581 10.1047C8.91613 9.85098 9.32903 9.48974 9.65591 9.11345C10.3516 8.31464 10.8 7.34059 10.9505 6.30204C10.9946 5.99993 11 5.91069 11 5.50108C11 5.09146 10.9946 5.00223 10.9505 4.70012C10.6516 2.63483 9.18172 0.899604 7.18817 0.256688C6.83656 0.142726 6.46237 0.0642427 6.04301 0.0169378C5.93978 0.00618668 5.22903 -0.00563913 5.13979 0.00296175ZM7.3914 3.32935C7.44301 3.35516 7.48495 3.40461 7.5 3.45622C7.5086 3.48417 7.51075 4.08193 7.5086 5.42905L7.50538 7.36209L7.16452 6.83959L6.82258 6.31709V4.91192C6.82258 4.00345 6.82688 3.49277 6.83333 3.46804C6.85054 3.40784 6.88817 3.36053 6.93979 3.33258C6.98387 3.31 7 3.30785 7.16882 3.30785C7.32796 3.30785 7.35591 3.31 7.3914 3.32935Z"
                            fill="currentColor"
                        />
                    </svg>
                    Next.js
                </a>
                an open-source web framework built with
                <Link
                    href="https://react.dev"
                    target="_blank"
                    className="mx-2 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                >
                    <ReactIcon />
                    React
                </Link>
                .
            </p>
            <ImageComponent width={350} height={500} />

            <span className="m-2">
                <div className="my-8 font-light tracking-wide">
                    Simplify communication, drop me a line at
                    <a
                        href={`mailto:${process.env.NEXT_PUBLIC_Mail}`}
                        className={
                            'ml-2 text-neutral-500 underline hover:text-black'
                        }
                    >
                        {process.env.NEXT_PUBLIC_Mail}
                    </a>
                </div>
                <p className=" font-light tracking-wide">
                    Embark on an exhilarating journey through the captivating
                    pages of my meticulously crafted
                    <span className="m-2">
                        <a
                            href="/Claudio_Lau.pdf"
                            download
                            className="text-blue-500"
                        >
                            curriculum vitae
                        </a>
                    </span>
                </p>
            </span>
        </SpacingLayout>
    )
}
