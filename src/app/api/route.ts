import type { NextApiRequest, NextApiResponse } from 'next'

import github from './github.json'

const fetchPublicRepositories = github

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const username = process.env.NEXT_PUBLIC_GithubOwner
        if (!username) throw new Error('Environment name not found')

        res.status(200).send(fetchPublicRepositories)
    } catch (error) {
        console.error(error)
    }
}
