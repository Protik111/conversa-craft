"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name}<br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            {/* Not sign in <br /> */}
            <button onClick={() => signIn()}>Sign out</button>
        </>
    )
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton></AuthButton>
        </div>
    )
}