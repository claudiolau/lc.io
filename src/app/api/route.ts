import { NextResponse } from 'next/server'
import github from './github.json'

export async function GET() {
    //https://api.github.com/users/${accessToken.githubOwner}/repos
    try {
        const augmentData = github.map((x) => ({
            name: x.name,
            description: x.description,
            html_url: x.html_url,
        }))

        return NextResponse.json(augmentData)
    } catch (error) {
        console.error(error)
    }
}
