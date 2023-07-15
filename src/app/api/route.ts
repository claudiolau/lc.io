import { NextResponse } from 'next/server'
import github from './github.json'

const fetchPublicRepositories = github

export async function GET() {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')

        return NextResponse.json(fetchPublicRepositories)
    } catch (error) {
        console.error(error)
    }
}
