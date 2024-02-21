import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

// Dummy data
const posts = [
     {
       title: 'Lorem Ipsum',
       slug: 'lorem-ipsum',
       content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
     },
];

export async function GET(){
     const session = getServerSession();
     console.log(session);
     return NextResponse.json(posts);
}