import { NextResponse } from 'next/server'

type IRepoMetaData = {
    name: string
    description: string
    html_url: string
}
const fetchPublicRepositories = async (username: string) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`,
            { mode: 'cors' }
        )

        if (!response.ok) throw new Error('Failed to fetch repositories.')

        const repositories = await response.json()

        return repositories.map(
            ({ name, description, html_url }: IRepoMetaData) => ({
                name,
                description,
                image: `https://opengraph.githubassets.com/1/${username}/${name}`,
                url: html_url,
            })
        )
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function GET() {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')
        const data = await fetchPublicRepositories(username)

        return NextResponse.json(data)
    } catch (error) {
        console.error(error)
    }
}
