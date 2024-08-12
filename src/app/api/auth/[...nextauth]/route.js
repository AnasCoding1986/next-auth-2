import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email", required: true },
                password: { label: "Password", type: "password", placeholder: "password", required: true }
            },
            async authorize(credentials) {

                const {email,password} = credentials;
                console.log(email,password);
                

                if (!credentials) {
                    return null;
                }
                if (email) {
                    const currentUser = users.find((user) => user.email === email);
                    console.log(currentUser);
                    
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser
                        }
                    }
                }
                return null;
            }
        })
    ]
};

const handler = NextAuth(authOption);

const users =[
    {
        id: 1,
        name: "anas",
        email: "a@a.com",
        type: "admin",
        password: "password"
    },
    {
        id: 2,
        name: "anas2",
        email: "b@b.com",
        type: "admin",
        password: "password"
    },
    {
        id: 3,
        name: "anas3",
        email: "c@c.com",
        type: "user",
        password: "password"
    },
    {
        id: 4,
        name: "anas4",
        email: "d@d.com",
        type: "user",
        password: "password"
    },
];

export { handler as GET, handler as POST }