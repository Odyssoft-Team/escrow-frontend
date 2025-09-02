import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Rutas públicas permitidas sin token
const PUBLIC_PATHS = ["/login", "/register"];

function isPublicPath(pathname: string) {
  // Acepta /login, /register y /register/**
  return PUBLIC_PATHS.includes(pathname) || pathname.startsWith("/register/");
}

// La función middleware intercepta todas las solicitudes
export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  const { pathname } = request.nextUrl;

  // Si intenta acceder a la raíz, redirecciona a /home siempre
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Si está en ruta pública, permite el acceso
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Si no hay token, redirecciona a /login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Si hay token, permite el acceso
  return NextResponse.next();
}

// Actúa sobre todas las rutas (no solo "/")
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
