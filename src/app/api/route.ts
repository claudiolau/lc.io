import { NextRequest, NextResponse } from 'next/server'

type IRepoMetaData = {
    name: string
    description: string
    html_url: string
    image: string
}
const fetchPublicRepositories = async (username: string) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`
        )

        if (!response.ok) throw new Error('Failed to fetch repositories.')

        const repositories = await response.json()

        return repositories.map(
            ({ name, description, html_url, image }: IRepoMetaData) => ({
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

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()
    // add cors to every request
    if (request.nextUrl.pathname) {
        console.log(request.nextUrl.pathname)
        response.headers.append('Access-Control-Allow-Origin', '*')
    }
    return response
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