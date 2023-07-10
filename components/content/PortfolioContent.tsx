import { SpacingLayout } from '@components/layouts'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type GitData = any

export const PortfolioContent = () => {
    const [data, setData] = useState<GitData[]>()
    const [isLoading, setIsLoading] = useState(true) // Added loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPublicRepositories = async () =>
                    // username: string | null
                    {
                        const accessToken =
                            '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'
                        const headers = {
                            Authorization: `Bearer ${accessToken}`,
                        }

                        try {
                            const response = await fetch(
                                `https://api.github.com/users/claudiolau/repos`,
                                { headers }
                            )

                            if (!response.ok)
                                throw new Error('Failed to fetch repositories.')

                            const repositories = await response.json()

                            const augementData = repositories.map(
                                ({ name, description, html_url }: any) => ({
                                    name,
                                    description,
                                    image: `https://opengraph.githubassets.com/1/claudiolau/${name}`,
                                    url: html_url,
                                })
                            )
                            console.log(augementData)
                            setData(augementData)
                        } catch (error) {
                            console.error(error)
                            throw error
                        }
                    }
                fetchPublicRepositories()
                // // setData(jsonData)
                setIsLoading(false) // Update loading state
            } catch (error) {
                console.error('Error fetching data:', error)
                throw new Error('Fetch missing')
            }
        }
        fetchData()
    }, [])

    return (
        <SpacingLayout>
            <div className="mx-auto">
                <div className="py-8 font-light tracking-wide">
                    <div className="py-2">
                        I am a frontend wizard, a fervent believer in the power
                        of pixels. I thrive on crafting digital experiences at
                    </div>
                    {isLoading ? (
                        <div className="mt-8 flex justify-center">
                            <div>Loading...</div>{' '}
                            {/* Replace with your loading spinner */}
                        </div>
                    ) : (
                        <div className="my-8 grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 sm:gap-x-8">
                            {data?.map((x: GitData, index: number) => (
                                <div key={index}>
                                    {isLoading ? (
                                        <div className="max-w-sm rounded shadow-lg">
                                            <div>Loading...</div>{' '}
                                            {/* Replace with your loading spinner */}
                                        </div>
                                    ) : (
                                        <div className="rounded">
                                            <Link href={x.url}>
                                                <img
                                                    width={350}
                                                    height={500}
                                                    src={x.image}
                                                    alt={x.name}
                                                />
                                            </Link>
                                            <div className="my-2">
                                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                    {x.description}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </SpacingLayout>
    )
}

export default PortfolioContent
