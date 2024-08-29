import nextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from 'next-auth/providers/credentials';

// export function GET(req: NextRequest, { params: { authRoutes } }: {
//     params: {
//         authRoutes: string[]
//     }
// }) {

//     console.log('params', authRoutes);

//     return NextResponse.json({
//         message: "izhar"
//     })
// }

const handler = nextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                console.log('credentials', credentials);

                return {
                    id: 'user1',
                    name: 'izhar',
                    email: 'izhar@test.com'
                }
            }
        })
    ]
})





export const GET = handler;
export const POST = handler;











