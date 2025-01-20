import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // اینجا لاجیک اعتبارسنجی کاربر را پیاده‌سازی کنید
        if (credentials?.username === "admin" && credentials?.password === "admin") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com"
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/(auth)/login',
  }
})

export { handler as GET, handler as POST }
