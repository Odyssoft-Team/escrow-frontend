import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  console.log("eliminando el token");

  cookieStore.delete("token");
  return NextResponse.json({ message: "Logout successful", status: true });
}
