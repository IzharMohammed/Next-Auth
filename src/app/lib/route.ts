import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_CONFIG = {
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            console.log('user', user);
            console.log('token', token);
            token.userId = token.sub
            return token;
        },
        session: ({ session, token, user }: any) => {
            console.log('session', session)
            if (session.user) {
                session.user.id = token.userId
            }
            return session;
        }
    },
    pages : {
        signIn : '/signin'
    }
}
