import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email", required: true },
                password: { label: "Password", type: "password", placeholder: "password", required: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                return true;
            }
        })
    ]
})

const users =[
    {
        id: 1,
        name: "anas",
        email: "a@a.com",
        password: "pass"
    },
    {
        id: 2,
        name: "anas2",
        email: "b@b.com",
        password: "pass"
    },
    {
        id: 3,
        name: "anas3",
        email: "c@c.com",
        password: "pass"
    },
    {
        id: 4,
        name: "anas4",
        email: "d@d.com",
        password: "pass"
    },
]

export { handler as GET, handler as POST }