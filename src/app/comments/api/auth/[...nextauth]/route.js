import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
        session: {
            strategy: "jwt"
        },
        providers: [
            CredentialsProvider({
                credentials: {
                    email: { label: "Username", type: "text", required: true, placeholder: "Your Email", name: "email" },
                    password: { label: "Password", type: "password", required: true,placeholder: "Your Password", name: "password" },
                    username: { label: "User Name", type: "text", required: true,placeholder: "Your Name", name: "username" },
                },
                async authorize(credentials) {

                    if (!credentials) {
                        return null;
                    }
                    return true;
                }
            }),

        ]
    
})

export { handler as GET, handler as POST }