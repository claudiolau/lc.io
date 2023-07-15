import { NextResponse } from 'next/server'
import github from './github.json'

export async function GET() {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')

        return NextResponse.json(github)
    } catch (error) {
        console.error(error)
    }
}
