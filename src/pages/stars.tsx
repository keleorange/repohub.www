import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useOctokitClient } from '~/hooks/useOctokit'

export default function Stars() {
    
    const octokit = useOctokitClient()
    const { data: sessionData } = useSession()
    useEffect(() => {
        async function fetchStars() {
            if(!sessionData) {
                return
            }
            const { data } = await octokit.request(`GET /users/{username}/starred`, {
                username: sessionData.user.userName,
                per_page: 100
            })
            console.log(data)
        }
        void fetchStars()
    }, [])
    return (
        <div>Stars</div>
    )
}