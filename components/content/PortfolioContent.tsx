import { SpacingLayout } from '@components/layouts'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type IGitData = {
    name: string
    description: string
    image: string
    html_url: string
}
// const accessToken = {
//     githubOwner: process.env.NEXT_PUBLIC_GithubOwner,
//     gitToken: process.env.NEXT_PUBLIC_GitToken,
// } as const

// const headers = {
//     Authorization: `${accessToken.gitToken}`,
// } as const

export const PortfolioContent = () => {
    const [data, setData] = useState<IGitData[]>()
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPublicRepositories = async () => {
                    try {
                        // const response = await fetch(
                        //     `https://api.github.com/users/${accessToken.githubOwner}/repos`,
                        //     { headers }
                        // )

                        // let backUpdata
                        // if (!response.ok) {
                        //     backUpdata = await fetch(
                        //         'http://localhost:3000/api'
                        //     )
                        // }

                        // const repoData = response.ok
                        //     ? await response.json()
                        //     : backUpdata

                        const response = await fetch(
                            'http://localhost:3000/api',
                            {
                                method: 'GET',
                                headers: {
                                    accept: 'application/json',
                                },
                            }
                        )
                        if (!response.ok) {
                            throw new Error(`Error! status: ${response.status}`)
                        }
                        const repoData = await response.json()
                        console.log(repoData)
                        setData(repoData)
                    } catch (error) {
                        console.error(error)
                    }
                }

                fetchPublicRepositories()
                // setIsLoading(false) // Update loading state
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

                    <div className="my-8 grid grid-cols-2 gap-8 py-4 sm:gap-x-8">
                        {data?.map((x: IGitData, index: number) => (
                            <div key={index}>
                                <div className="my-8 flex flex-col rounded">
                                    <Link href={x.html_url}>{x.name}</Link>
                                    <span className="text-blue-700 ring-blue-700/10">
                                        <span className="inline-flex  rounded-md bg-blue-50 px-2 py-1 text-xs font-medium ">
                                            {x.description}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SpacingLayout>
    )
}

export default PortfolioContent
