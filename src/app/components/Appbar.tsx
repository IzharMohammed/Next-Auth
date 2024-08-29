"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();
    return (
        <>
            <button onClick={() => signIn()}>signin</button>
            <br />
            <button onClick={() => signOut()}>logout</button>
            <br />
            <div>Client side component {JSON.stringify(session)}</div>
            <br />  
        </>

    );
}
