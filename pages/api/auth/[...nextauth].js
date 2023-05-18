import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook" ;
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '../../../settings/firebase/firebase.setup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from 'firebase-admin/app';
import  EmailProvider  from 'next-auth/providers/email';

export const NextAuthOptions = {
    secret:process.env.NEXT_AUTH_SECRET,
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
          }),
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
        FacebookProvider({
          clientId:process.env.FACEBOOK_CLIENT_ID,
          clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        }),
        TwitterProvider({
          clientId:process.env.TWITTER_CLIENT_ID,
          clientSecret:process.env.TWITTER_CLIENT_SECRET
        }),
        CredentialsProvider({
            name:'credentials',
            credentials:{},
            authorize(credentials,req) {
                const {email,password} = credentials;

                //let's say below is an existing user
                const user = {
                    username:'you@gmail.com',
                    password:'lordos'
                }

                //authenticate a user from firebase auth

                //if credentials don't match
                if (signInWithEmailAndPassword(auth,email,password)){
                    return user;
                } 

                //check if credentials match file on record
                //then, return user
                return null;
            }
        })
    ],
    pages:{
        signIn:'/signin',
    },
    adapter:FirestoreAdapter({
        credential:cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
        })
    }),
    callbacks:{
        async jwt (token) {
            return token
        },

        async session (session){
            return session;
        }
    }
}


export default NextAuth(NextAuthOptions);