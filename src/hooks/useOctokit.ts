import { useSession } from 'next-auth/react'
import { Octokit } from 'octokit'

let OctokitClient: Octokit

export function useOctokitClient() {
    if(OctokitClient) {
        return OctokitClient
    }
    const session = useSession()
    OctokitClient = new Octokit({
        auth: session.data?.user.accessToken
    })

    return OctokitClient
}