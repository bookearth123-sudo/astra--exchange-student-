import SignOutButton from '@/app/components/SignOutButton'
import {auth} from '@/auth'
import { redirect} from 'next/navigation'

async function Dashboard(){
    const session = await auth()
    
    if (!session?.user){
        redirect('.login')
    }

    console.log(session)

    return (
        <main>
            <h1>Welcome, {session.user.name}</h1>
            <p>{session.user.email}</p>
            <SignOutButton />
        </main>
    )
}

export default Dashboard 