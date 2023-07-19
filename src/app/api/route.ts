import { NextResponse } from 'next/server'
import github from './github.json'

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
                // image: `https://opengraph.githubassets.com/1/${username}/${name}`,
                url: html_url,
            })
        )
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function GET() {
    //https://api.github.com/users/${accessToken.githubOwner}/repos

    // TODO add persistance data layer

    try {
        const gitOwner =
            (process.env && process.env.NEXT_PUBLIC_GithubOwner) || ''
        const data = await fetchPublicRepositories(gitOwner)
        const augmentData =
            data ||
            github.map((x) => ({
                name: x.name,
                description: x.description,
                html_url: x.html_url,
            }))

        return NextResponse.json(augmentData)
    } catch (error) {
        console.error(error)
    }
}
