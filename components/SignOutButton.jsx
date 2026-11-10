import { signOut } from '@/auth'

function SignOutButton() {
    return (
        <form action={async () => {
            'use server'
            await signOut({ redirectTo: 'login'})
        }}>
            <button type="sumbit">Sign Out</button>
        </form>
    )
}

export default SignOutButton