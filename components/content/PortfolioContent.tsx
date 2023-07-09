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
                const response = await fetch('http://localhost:3000/api')
                const jsonData = await response.json()
                console.log(jsonData)
                setData(jsonData)
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
                            <div className="loader">Loading...</div>{' '}
                            {/* Replace with your loading spinner */}
                        </div>
                    ) : (
                        <div className="my-8 grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 sm:gap-x-8">
                            {data?.map((x: GitData, index: number) => (
                                <div className="grid-item" key={index}>
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
                                                    src={String(x.image)}
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
