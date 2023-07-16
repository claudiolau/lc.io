import { NextResponse } from 'next/server'
import github from './github.json'

export async function GET() {
    try {
        // const augmentData = github.map((x) => ({
        //     name: x.name,
        //     description: x.description,
        //     html_url: x.html_url,
        // }))

        // return NextResponse.json(augmentData)
        return new Response('Hello, Next.js!', {
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
