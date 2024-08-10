import NextAuth from "next-auth/next";

const handler = NextAuth({
    session: {
        session: {
            strategy: "jwt"
        },
        providers: [
            
        ]
    }
})

export {handler as GET, handler as POST}