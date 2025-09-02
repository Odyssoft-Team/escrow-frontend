import api from "@/lib/axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const { username, password } = await req.json();

  const response = await api.post(
    "/login",
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    cookieStore.set("token", username);
    return NextResponse.json({
      message: "Login successful",
      status: true,
    });
  } else {
    return NextResponse.json({
      message: "Login failed",
      status: false,
    });
  }
}
