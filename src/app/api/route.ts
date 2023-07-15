import github from './github.json'

export async function GET() {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')

        return github
    } catch (error) {
        console.error(error)
    }
}
