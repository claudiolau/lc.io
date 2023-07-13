import { SpacingLayout } from '@components/layouts'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type IGitData = {
    name: string
    description: string
    image: string
    html_url: string
}

export const PortfolioContent = () => {
    const [data, setData] = useState<IGitData[]>()
    const [isLoading, setIsLoading] = useState(true) // Added loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPublicRepositories = async () =>
                    // username: string | null
                    {
                        const accessToken = {
                            githubOwner: process.env.NEXT_PUBLIC_GithubOwner,
                            gitToken: process.env.NEXT_PUBLIC_GitToken,
                        }

                        const headers = {
                            Authorization: `${accessToken.gitToken}`,
                        }

                        try {
                            const response = await fetch(
                                `https://api.github.com/users/${accessToken.githubOwner}/repos`,
                                { headers }
                            )

                            if (!response.ok)
                                throw new Error('Failed to fetch repositories.')

                            const repositories = await response.json()

                            const augmentData = repositories.map(
                                ({
                                    name,
                                    description,
                                    html_url,
                                }: IGitData) => ({
                                    name,
                                    description,
                                    image: `https://opengraph.githubassets.com/1/${accessToken.githubOwner}/${name}`,
                                    html_url: html_url,
                                })
                            )

                            setData(augmentData)
                        } catch (error) {
                            console.error(error)
                            throw error
                        }
                    }

                fetchPublicRepositories()
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
                        Behold, fellow knowledge seekers, for I present to you a
                        curated collection of awe-inspiring repositories that
                        are sure to ignite your coding passions!
                    </div>
                    {isLoading ? (
                        <div className="mt-8 flex justify-center">
                            <div>Loading...</div>{' '}
                            {/* Replace with your loading spinner */}
                        </div>
                    ) : (
                        <div className="my-8 grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 sm:gap-x-8">
                            {data?.map((x: IGitData, index: number) => (
                                <div key={index}>
                                    {isLoading ? (
                                        <div className="max-w-sm rounded shadow-lg">
                                            <div>Loading...</div>{' '}
                                            {/* Replace with your loading spinner */}
                                        </div>
                                    ) : (
                                        <div className="rounded">
                                            <Link href={x.html_url}>
                                                <Image
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
