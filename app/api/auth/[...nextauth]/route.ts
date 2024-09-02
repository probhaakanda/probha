// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

const authOptions = NextAuth({
  secret:process.env.NEXT_PUBLIC_SECRET,
  theme:{
    colorScheme:'auto'
  },
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        ? process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        : "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET
        ? process.env.GITHUB_CLIENT_SECRET
        : "",
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : "",
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID
        ? process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID
        : "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET
        ? process.env.TWITTER_CLIENT_SECRET
        : "",
    })
  ],
  // Other NextAuth options can be added here
});

export { authOptions as POST, authOptions as GET };
