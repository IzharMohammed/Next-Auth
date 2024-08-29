"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Appbar from "./components/Appbar";

export default function Home() {
  const session = useSession();
  return (
<>
<Appbar />
{JSON.stringify(session)}
</>

  );
}
