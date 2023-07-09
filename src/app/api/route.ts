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
        // Set Access-Control-Allow-Headers header

        return new Response(data, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        })
    } catch (error) {
        console.error(error)
    }
}
