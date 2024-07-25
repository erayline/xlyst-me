import { NextResponse } from "next/server";

// app/api/echo/route.js

export async function POST(req) {
    try {
      const body = await req.json();
      return new NextResponse(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  