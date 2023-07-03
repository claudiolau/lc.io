import { NextRequest, NextResponse } from 'next/server'

type IRepoMetaData = {
    name: string
    description: string
    html_url: string
}
const fetchPublicRepositories = async (username: string) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`
        )

        if (!response.ok) throw new Error('Failed to fetch repositories.')

        const repositories = await response.json()

        return repositories.map(
            ({ name, description, html_url }: IRepoMetaData) => ({
                name,
                description,
                url: html_url,
            })
        )
    } catch (error) {
        console.error(error)
        throw error
    }
}
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')
        const x = await fetchPublicRepositories(username)
        return NextResponse.json(x)
    } catch (error) {
        console.error(error)
    }
}
