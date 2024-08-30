import { NEXT_AUTH_CONFIG } from "@/app/lib/route";
import nextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
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

const handler = nextAuth(NEXT_AUTH_CONFIG)


export const GET = handler;
export const POST = handler;
