"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    return (
        <>
            <button onClick={() => signIn()}>signin</button>
            <br />
            <button onClick={() => signOut()}>logout</button>
            <br />
        </>

    );
}
